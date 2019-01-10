/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../../redux/actions/todos';
import {
  Title, SpecialLabel, SpecialInput, Icon, ButtonIcon,
} from './style';

class index extends Component {
    state = {
      todo: '',
    }

    onChange = ({ target: { name, value } }) => {
      this.setState({ [name]: value });
    }

    render() {
      const { todo } = this.state;
      return (
        <div>
          <Title>Create New</Title>
          <SpecialLabel htmlFor="todo">Task</SpecialLabel>
          <SpecialInput name="todo" value={todo} placeholder="Enter Task" onChange={this.onChange} />
          <ButtonIcon type="button" onClick={() => this.props.addTodo(todo)}>
            <Icon className="fas fa-plus-circle fa-2x" />
          </ButtonIcon>
        </div>
      );
    }
}

index.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(null, { addTodo })(index);
