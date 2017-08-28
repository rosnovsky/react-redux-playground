import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book){
      return (
      <div>Click on a book to get started</div>
      )
    }

    return (
      <div>
        <h3>Details for: </h3>
        <div>Title: "{this.props.book.title}"</div>
        <div>Length: {this.props.book.pages} pages</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);