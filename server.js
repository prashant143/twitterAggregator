const app = require('./app');
const port = process.env.PORT || 3000;

const morgan = require('morgan');
app.use(morgan('combined'));

app.listen(port, function () {
  console.log('App listening on port ' + port)
});
