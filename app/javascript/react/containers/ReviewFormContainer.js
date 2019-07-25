import React, { Component } from 'react';
import ReviewTextField from '../components/ReviewTextField';

class ReviewFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      errors: {}
    }
    this.validateTitleChange = this.validateTitleChange.bind(this)
    this.validateBodyChange = this.validateBodyChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleClearForm() {
    this.setState({
      title: "",
      body: ""
    })
  }

  validateTitleChange(input) {
    if(input.trim() === '') {
      let newError = { title: "You must input a review title."}
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.title
      this.setState({ errors: errorState })
      return true
    }
  }

  validateBodyChange(input) {
    if(input.trim() === '') {
      let newError = { body: "You must input a review body."}
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.body
      this.setState({ errors: errorState })
      return true
    }
  }

  handleChange(event) {
    let state = event.target.name
    this.setState({[state]:event.target.value})
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if(
      this.validateTitleChange(this.state.title) &&
      this.validateBodyChange(this.state.body)
    ) {
      let newReviewObject = {
        title: this.state.title,
        body: this.state.body
      }
      this.props.addReview(newReviewObject)
      this.handleClearForm(event)
    }
  }

  render(){
    let errorDiv;
    let errorItems;

    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map((error) => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <div className="callout">
        <form onSubmit={this.handleFormSubmit}>
          {errorDiv}
          <ReviewTextField
            label="Review Title"
            name="title"
            value={this.state.title}
            handleChange={this.handleChange}
          />

          <ReviewTextField
            label="Review Body"
            name="body"
            value={this.state.body}
            handleChange={this.handleChange}
          />

          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ReviewFormContainer
