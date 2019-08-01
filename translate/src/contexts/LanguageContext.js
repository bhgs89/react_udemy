import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  // Context Store
  state = { language: 'english' };

  // Manipulate Store data
  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
