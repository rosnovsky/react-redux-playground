import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Field, reduxForm } from 'redux-form';

class NewPost extends Component {
  renderField (field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control"
               type="text"
               {...field.input}
        />
        <p>{field.meta.error}</p>
      </div>
    )
  }

  renderTextField(field) {
    return (
      <div className="form-group">
      <label>{field.label}</label>
      <textarea className="form-control"
             {...field.input}
      />
        <p>{field.meta.error}</p>
    </div>
    )
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Create New Post
          </Link>
        </div>
        <h3>Create New Post</h3>
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
            label="Text"
            name="text"
            component={this.renderTextField} />
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function validate (values) {
  const errors ={};

  if(!values.title){
    errors.title = "Enter a title";
  }

  if(!values.categories){
    errors.categories = "Enter at least one category";
  }

  if(!values.text){
    errors.text = "Enter some text, it's a blog after all";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(NewPost);