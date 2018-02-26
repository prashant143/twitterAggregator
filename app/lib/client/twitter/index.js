import axios from 'axios';

class TwitterClient {
  fetchTweets(search) {
    return axios.get('/api/tweets', {
      params: {
        search
      }
    })
  }
}

export default new TwitterClient();
