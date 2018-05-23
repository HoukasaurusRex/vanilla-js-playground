const express = require('express');
const exphbs  = require('express-handlebars');

/**
  * Controllers
**/
const homeController = require('./controllers/home');
const vanillajsController = require('./controllers/vanilla');

const port = process.env.PORT || 3000;
const app = express();

/**
 * Express configuration
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
app.get('/03-cssvariables', vanillajsController.vanillavariables);
app.get('/04-arraycardio', vanillajsController.vanillarrays);
app.get('/05-flexpanels', vanillajsController.vanillaflexpanels);
app.get('/06-typeahead', vanillajsController.vanillatypeahead);
app.get('/07-canvas', vanillajsController.vanillacanvas);
app.get('/08-consolecommander', vanillajsController.vanillaconsole);
app.get('/09-multicheck', vanillajsController.vanillamulticheck);

/**
  * Server listening
**/
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});

module.exports = app;
