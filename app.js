const express = require('express');
const app = express();
const path = require('path');

const twitterClient = require('./lib/Twitter');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/api/tweets', function (req, res) {
  const searchQuery = req.query.search;
  const resultLimit = 10;

  if (!searchQuery) {
    res.json({
      'error': '\'search\' query is missing.'
    });
  }

  twitterClient.get('search/tweets', { q: req.query.search, count: resultLimit }, function (error, tweets) {
    res.json(tweets.statuses);
  });

});

module.exports = app;
