/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from '../Todo';
import { getTodo } from '../../redux/actions/todos';

class index extends Component {
    componentDidMount = async () => {
      const { getTodo } = this.props;
      getTodo();
    }

    check = () => {
      console.log('Checked');
    }

    Delete = () => {
      console.log('deleted');
    }

    render() {
      const { todos } = this.props;
      return (
        <Fragment>
          { (todos.length > 0) ? (todos.map(todo => (
            <Todo
              key={todo.id}
              date={todo.id}
              description={todo.description}
              Check={this.check}
              Delete={this.Delete}
              checked={todo.checked}
            />
          ))) : (<div>There is no TODO yet</div>) }
        </Fragment>
      );
    }
}

index.propTypes = {
  getTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos.todos,
});

export default connect(mapStateToProps, { getTodo })(index);