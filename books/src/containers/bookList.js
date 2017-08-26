import React, { Component } from 'react';
import { connect } from 'react-redux';


class Booklist extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key = {book.title} className = "list-group-item">
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

export default connect(mapStateToProps)(Booklist);