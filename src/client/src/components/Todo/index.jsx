/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ToDo, Date, Note, Info, Paragraph,
} from './style';
import './style.css';

export default class index extends Component {
  render() {
    const {
      Check, Delete, date, description, checked,
    } = this.props;
    let style = {};
    let done = 'To Do';
    let check = 'fas fa-check-square';
    if (checked) {
      check = 'fas fa-window-close';
      done = 'Done';
      style = {
        backgroundColor: '#73C5FF',
      };
    }
    return (
      <ToDo>
        <Date>{date}</Date>
        <Info>
          <Paragraph>{description}</Paragraph>
          <Note style={style}>{done}</Note>
          <div className="buttonsForm">
            <i className="fas fa-trash-alt" onClick={Delete} />
            <i className={check} onClick={Check} />
          </div>
        </Info>
      </ToDo>
    );
  }
}

index.propTypes = {
  Check: PropTypes.func.isRequired,
  Delete: PropTypes.func.isRequired,
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};
