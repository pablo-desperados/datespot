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
      delete errorState.inputError
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
      delete errorState.inputError
      this.setState({ errors: errorState })
      return true
    }
  }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if(
      this.validateTitleChange(this.state.title) &&
      this.validateBodyChange(this.state.body)
    ) {
      let newReviewObject = {
        title: this.state.title.
        body: this.state.body
      }
      fetch('/api/v1/reviews', {
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(newReviewObject),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'applpication/json'
        }
      })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error)
        }
      })
      .then((responseBody) => {
        this.props.history.push(`/locations/${responseBody.location.id}`)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
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
      <div>
        <h3>Add a new review:</h3>

        <form onSubmit={this.handleFormSubmit}>
          {errorDiv}
          <ReviewTextField
            label="Review Title"
            name="title"
            value={this.sate.name}
            handleChange={this.handleChange}
          />

          <ReviewTextField
            label="Review Body"
            name="body"
            value={this.sate.name}
            handleChange={this.handleChange}
          />

          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ReviewFormContainer
