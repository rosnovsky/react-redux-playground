import React, { Component } from 'react';

import BookList from '../containers/bookList';
import BookDetail from '../containers/bookDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>This primitive app returns and displays selected book. It takes a clicked book from redux, runs an action, sends this action to the reducers and returns a particular book details. </div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
