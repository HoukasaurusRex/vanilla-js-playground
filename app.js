const express = require('express');
const exphbs  = require('express-handlebars');

const port = process.env.PORT || 3000;
const app = express();

/**
 * Express configuration.
 */
// app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
// app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000);
const hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    ifeq: (a, b, options) => {
      if (a === b) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
    toJSON: object => JSON.stringify(object)
  }
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

/**
  * Routes
**/

app.get('/', (req, res) => {
  res.render('home'), {
    title: 'Home',
    page: 'home'
  }
});

app.get('/01-jsdrumkit', (req, res) => {
  res.render('pages/01-jsdrumkit', {
    title: 'Vanilla Drums',
    page: '01-jsdrumkit'
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
