const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: '9ua9spQFZgzSsGz4RUEpdwlLR',
  consumer_secret: 'uXQ2eA0gzRrblBLwOWRfI2g4geAIH4Us4nAMmf1Vk1E4smI4df',
  access_token_key: '99162645-BTCW3I3JLGY3MdGFSaaADujH5cefafuVXPjEsAIph',
  access_token_secret: 'DFt2EhCOa1LBv8LtETlOXWzpUrM6BJLREqgTJG6buEOmg'
});

module.exports = client;
