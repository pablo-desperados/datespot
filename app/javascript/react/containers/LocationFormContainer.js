import React, { Component } from 'react';
import TextField from '../components/TextField';

class LocationFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      errors: {}
    }
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validateNameChange = this.validateNameChange.bind(this)
    this.validateAddressChange = this.validateAddressChange.bind(this)
    this.validateCityChange = this.validateCityChange.bind(this)
    this.validateStateChange = this.validateStateChange.bind(this)
    this.validateZipChange = this.validateZipChange.bind(this)
  }

  handleClearForm() {
    this.setState({
      name: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    })
  }

  validateNameChange(input) {
    if(input.trim() === '') {
      let newError = { name: "You must input a location name." }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.inputError
      this.setState({ errors: errorState })
      return true
    }
  }

  validateAddressChange(input) {
    if(input.trim() === '') {
      let newError = { address: "You must input an address." }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.inputError
      this.setState({ errors: errorState })
      return true
    }
  }

  validateCityChange(input) {
    if(input.trim() === '') {
      let newError = { city: "You must input a city." }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.inputError
      this.setState({ errors: errorState })
      return true
    }
  }

  validateStateChange(input) {
    if(input.trim() === '') {
      let newError = { state: "You must input a state." }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.inputError
      this.setState({ errors: errorState })
      return true
    }
  }

  validateZipChange(input) {
      if(input.trim() === '') {
      let newError = { zip: "You must input a zip code." }
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
    if (
      this.validateNameChange(this.state.name) &&
      this.validateAddressChange(this.state.address) &&
      this.validateCityChange(this.state.city) &&
      this.validateStateChange(this.state.state) &&
      this.validateZipChange(this.state.zip)
    ) {
      let newLocationObject = {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip
      }
      fetch('/api/v1/locations', {
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(newLocationObject),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
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
        debugger
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
        <h1>Add a new Location</h1>

        <form onSubmit={this.handleFormSubmit}>
          {errorDiv}
          <TextField
            label="Location Name"
            name="name"
            value={this.state.name}
            handleChange={this.handleChange}
          />

          <TextField
            label="Address"
            name="address"
            value={this.state.address}
            handleChange={this.handleChange}
          />

          <TextField
            label="City"
            name="city"
            value={this.state.city}
            handleChange={this.handleChange}
          />

          <TextField
            label="State"
            name="state"
            value={this.state.state}
            handleChange={this.handleChange}
          />

          <TextField
            label="Zip Code"
            name="zip"
            value={this.state.zip}
            handleChange={this.handleChange}
          />

          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default LocationFormContainer;
