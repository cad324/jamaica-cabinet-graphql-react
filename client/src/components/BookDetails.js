import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getSingleBookQuery} from '../queries/queries';

class BookDetails extends Component {
  render() {
    return (
      <div>
        <p>Output book details here</p>
      </div>
    );
  }
}

export default graphql(getSingleBookQuery)(BookDetails);