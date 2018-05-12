const express = require('express');
const exphbs  = require('express-handlebars');

/**
  * Controllers
**/
const homeController = require('./controllers/home');
const vanillajsController = require('./controllers/vanillajs')

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
  * Primary app routes
**/
app.get('/', homeController.home);
app.get('/01-jsdrumkit', vanillajsController.vanilladrums);
app.get('/02-js-css-clock', vanillajsController.vanillaclock);

/**
  * Server listening
**/
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});

module.exports = app;
