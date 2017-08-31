import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "", placeholder: "Get a 5-day forecast for your favorite city" };
    this.onInputChange = this.onInputChange.bind(this); 
    this.onFormSubmit = this.onFormSubmit.bind(this); 
  }
  
  onInputChange (event) {
    // autocomplete dropdown goes here
    //eventually

  if ((event.target.value).match(/^[-\sa-zA-Z]+$/)) {
      this.setState({ term: event.target.value });
    } else {
      this.setState({ term: "", placeholder: "Please only use Latin character, dashes and spaces" });
    }
    let data = this.state.term;
    if (data.length > 30) {
      this.setState({ term: "Izhevsk", placeholder: "Stop messing with me!!" });
    }
  }

  onFormSubmit (event) {
    event.preventDefault();
    
    this.props.fetchWeather(this.state.term);
    this.setState({ term : "" });

  }
  
  render () {
    return (
      <div>
        <form onSubmit = {this.onFormSubmit} className="input-group">
          <input 
          placeholder = { this.state.placeholder }
          className = "form-control"
          value = { this.state.term }
          onChange = { this.onInputChange }
           />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Search</button>
          </span>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
 
  return bindActionCreators({ fetchWeather }, dispatch);

}

export default connect (null, mapDispatchToProps)(SearchBar);