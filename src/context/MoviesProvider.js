import React, { Component } from 'react';
import moviesContext from './moviesContext';

export default class MoviesProvider extends Component {
  state = {
    searchedQuery: null,
    setSearchedQuery: query => {
      this.setState({ searchedQuery: query });
    },
  };

  render() {
    return (
      <moviesContext.Provider value={this.state}>
        {this.props.children}
      </moviesContext.Provider>
    );
  }
}
