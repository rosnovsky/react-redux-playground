import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class NewPost extends Component {
  renderField (field) {
    
    const { meta: { touched, error } } = field;
    const formClassName = `form-group ${ touched && error ? "has-danger" : ""}`;
    const inputClassName = `form-control ${ touched && error ? "form-control-danger" : ""}`;

    return (
      <div className={formClassName}>
        <label className="form-control-label">{field.label}</label>
        <input className={inputClassName}
               type="text"
               {...field.input}
        />
        <p className="form-control-feedback">{ touched ? error : "" }</p>
      </div>
    )
  }

  renderTextField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${ touched && error ? "has-danger" : "" }`;
    const inputClassName = `form-control ${ touched && error ? "form-control-danger" : ""}`;

    return (
      <div className={className}>
      <label className="form-control-label">{field.label}</label>
      <textarea className={inputClassName}
             {...field.input}
      />
      <p className="form-control-feedback">{ touched ? error : "" }</p>
    </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container-fluid">
        <h3 className="display-2">Create New Post</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field 
            label="Post Title"
            name="title"
            component={this.renderField}/>

          <Field
            label="Categories"
            name="categories"
            component={this.renderField} />

          <Field
            label="Content"
            name="content"
            component={this.renderTextField} />
          <button className="btn btn-primary" type="submit">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    )
  }
}

function validate (values) {
  const errors ={};

  if(!values.title || values.title.length < 3 || values.title.length > 100){
    errors.title = "Please enter a title of 3 to 100 characters";
  }

  if(!values.categories || values.categories.length < 3 || values.categories.length > 100 ){
    errors.categories = "Please enter at least one category of at least 3 to 100 characters";
  }

  if(!values.content || values.content.length < 40 ){
    errors.content = `Enter at least 40 characters, it's a blog after all`;
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, {createPost})(NewPost))