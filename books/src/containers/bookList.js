import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    onClick = {() => this.props.selectBook(book) }
                    key = {book.title} className = "list-group-item">
                    {book.title}    
                </li>
            )
        })
    }
    render() {
        return (
            <ul className = "group-list col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    }
};

//Everything returned by this will become one of the props of BookList container (available throughout the app)
function mapDispatchToProps(dispatch){
    //When a selectBook is called, pass the result to all of the reducers
    
    return bindActionCreators({ selectBook }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(BookList);