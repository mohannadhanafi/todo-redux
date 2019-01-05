/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Form from './components/Form';
import './App.css';
import store from './redux/store';
import {
  AddForm, Note, Text, TodosBox,
} from './styled';
import Todos from './components/Todos';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AddForm>
            <Form />
            <Note>
              <Text>
To Do List App
Add, check and Test yourself

              </Text>
              <hr />
            </Note>
          </AddForm>
          <hr />
          <TodosBox>
            <Todos />
          </TodosBox>
        </div>
      </Provider>
    );
  }
}

export default App;
