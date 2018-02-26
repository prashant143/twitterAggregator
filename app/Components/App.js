import React from 'react';
import TwitterClient from '../lib/client/twitter';
import TweetsList from './Tweets/List';
import ErrorMessage from './Messages/Error';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      'searchQuery': '',
      'tweets': [],
      'error': '',
      'isFetching': false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange({ target: { value } }) {
    this.setState({ searchQuery: value });
  };

  onSubmit(event) {
    event.preventDefault();

    const searchQuery = this.state.searchQuery;
    this.setState({ isFetching: true });

    if (searchQuery.length < 1) {
      this.setState({ error: 'Search query is required', isFetching: false });
      return
    } else {
      this.setState({ error: '' });
    }

    TwitterClient
      .fetchTweets(searchQuery)
      .then((response) => {
        this.setState({ tweets: response.data, isFetching: false })
      });
  };

  render() {

    const { tweets, error, isFetching } = this.state;

    return (
      <div class="container">
      <h1 class="display-4">Twitter Aggregator</h1>
        <form onSubmit={this.onSubmit}>
        <table>
          <tr><td><input type="text" class="form-control" onChange={this.onChange} value={this.state.searchQuery} placeholder="Search Tweets Here"/></td>
          <td><button class="btn btn-outline-success" disabled={isFetching}>{isFetching ? 'Loading...' : 'Search'}</button></td>
          <td>{
            error && <ErrorMessage message={error}/>
          }</td>
          </tr>
          </table>
        </form>

        <TweetsList tweets={tweets}/>

      </div>
    );
  }
}
