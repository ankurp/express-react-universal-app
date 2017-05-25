require('dotenv').config({ silent: true });

const express = require('express');
const expressBrowserify = require('express-browserify');

const app = express();
const port = process.env.PORT || 4321;

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const isDev = (app.get('env') === 'development');
const browserifyier = expressBrowserify('./public/js/bundle.jsx', {
  watch: isDev,
  debug: isDev,
  extension: ['jsx'],
  transform: ['babelify'],
});
if (!isDev) {
  browserifyier.browserify.transform('uglifyify', { global: true });
}
app.get('/js/bundle.js', browserifyier);

app.get('/', function(req, res){
  res.render('index', { name: 'John' });
});

app.listen(port, () => {
  console.log('Server running on port: %d', port);
});
