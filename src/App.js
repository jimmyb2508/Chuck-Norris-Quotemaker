import React, { Component } from 'react';
import ListOfQuote from './components/ListOfQuote';
import QuoteCharacter from './components/QuoteCharacter';
import QuoteSelection from './components/QuoteSelection';

import API from './utils/API';
import './App.css';

class App extends Component {

  state = {
    quotes: [],
    firstName: 'Chuck',
    lastName: 'Norris',
    errorMessage: '',
    numQuote: 1,
    isError: false,
    isLoading: false,
    isCharacterEnabled: false,
    currentIndex: null
  };

  componentDidMount = () => {
    const { numQuote, firstName, lastName } =this.state;
    this.getRandomQuotes(numQuote, firstName, lastName);
  };

  showErrorMessage = () => {
    const isError = this.state.isError;

    if (isError) {
      return <p className="error">Error - {this.state.errorMessage}</p>
    }
  }

  showQuote = () => {
    const isLoading = this.state.isLoading;

    if(isLoading) {
      return <p>Quotes Loading...</p>
    }

    if(this.state.quotes.length > 0) {
      return <ListOfQuote 
      quotes={this.state.quotes}
      currentIndex={this.state.currentIndex}
      setIndexOnHover={this.setIndexOnHover} />;
    }
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });

    if (name === 'numQuote') {
      const { firstName, lastName } =this.state;
      this.getRandomQuotes(value, firstName, lastName);
    }
  };

  getRandomQuotes = (num, firstName, lastName) => {
    this.setState({ isLoading: true});
    API.getRandomQuotes(num, firstName, lastName)
      .then((res) => {
        this.setState({
          quotes: res.data.value,
          isError: false,
          isLoading: false
        });
      })
      .catch((err) => {
        this.setState({
          isError: true,
          isLoading: false,
          errorMessage: err.message || 'Failed fetching quotes'
        });
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { numQuote, firstName, lastName } = this.state;
    this.getRandomQuotes(numQuote, firstName, lastName);
    this.setState({ isCharacterEnabled: false });
  };

  enableCharacterFeature = () => {
    this.setState({ isCharacterEnabled: !this.state.isCharacterEnabled });
  };

  showCharacter = () => {
    const isCharacterEnabled = this.state.isCharacterEnabled;

    if (isCharacterEnabled) {
      return <QuoteCharacter 
      firstName={this.state.firstName}
      lastName={this.state.lastName}
      handleChange = {this.handleChange} 
      handleSubmit={this.handleSubmit} />
    }
    return <button onClick={this.enableCharacterFeature}>Change Name</button>
  };

  setIndexOnHover = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    console.log('State: ', this.state);
    const { numQuote, firstName, lastName } = this.state;

    // JSX
    return(
      <div className="App">
        {this.showErrorMessage()}
        <div className="App_header">
          <QuoteSelection handleChange={this.handleChange} />
          <button className="randombutt"
            onClick={() => this.getRandomQuotes(numQuote, firstName, lastName)}>
            Ask Chuck
          </button>
          {this.showCharacter()}
        </div>
        {this.showQuote()}
      </div>
    );
  }
}

export default App;
