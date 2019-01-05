/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import {
  Title, SpecialLabel, SpecialInput, Icon, ButtonIcon,
} from './style';

export default class index extends Component {
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
          <ButtonIcon type="button" onClick={() => console.log('Add new task')}>
            <Icon className="fas fa-plus-circle fa-2x" />
          </ButtonIcon>
        </div>
      );
    }
}
