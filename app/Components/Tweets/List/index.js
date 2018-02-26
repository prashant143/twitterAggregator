import React from 'react';
import PropTypes from 'prop-types';

const TweetsList = ({ tweets }) => (
  <div>
    <p>List of tweets:</p>
    <ul class="list-group">
      {
        tweets.map((tweet, key) => (
            <li class="list-group-item" key={key}>{tweet.text}</li>
          )
        )
      }
    </ul>
  </div>
);

TweetsList.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default TweetsList;
