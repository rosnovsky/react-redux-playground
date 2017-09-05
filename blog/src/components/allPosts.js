import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from "../actions";



class Index extends Component {

    renderPosts(){
        return (
            _.map(this.props.posts, post => {
                return(
                    <li className="list-group-item" key={post.id}><Link to="/posts/" >{post.title}</Link></li>
                )
            })
        )
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col">
                        <div className="text-xs-right">
                            <Link className="btn btn-primary" to="/posts/new">
                                Create New Post
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-md-left">
                        <h3 className = "display-2">Posts</h3>
                        <ul className="list-group">
                            {this.renderPosts()}
                        </ul>
                    </div>
                </div>   
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(Index);

