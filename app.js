const https = require('https');
const fs = require('fs');
const express = require('express');
const exphbs  = require('express-handlebars');

/**
  * Controllers
**/
const homeController = require('./controllers/home');
const vanillajsController = require('./controllers/vanilla');

/**
 * Server configuration
 */
const options = {
    key: fs.readFileSync( './localhost.key' ),
    cert: fs.readFileSync( './localhost.cert' ),
    requestCert: false,
    rejectUnauthorized: false
};
const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const server = https.createServer(options, app);

/**
 * Express configuration
 */
const hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    ifeq: (a, b, options) => {
      if (a === b) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
    section: function(name, options) {
          if(!this._sections) this._sections = {};
          this._sections[name] = options.fn(this);
          return null;
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
app.get('/01-drumkit', vanillajsController.vanilladrums);
app.get('/02-clock', vanillajsController.vanillaclock);
app.get('/03-cssvariables', vanillajsController.vanillavariables);
app.get('/04-arraycardio', vanillajsController.vanillarrays);
app.get('/05-flexpanels', vanillajsController.vanillaflexpanels);
app.get('/06-typeahead', vanillajsController.vanillatypeahead);
app.get('/07-canvas', vanillajsController.vanillacanvas);
app.get('/08-consolecommander', vanillajsController.vanillaconsole);
app.get('/09-multicheck', vanillajsController.vanillamulticheck);
app.get('/10-videoplayer', vanillajsController.vanillavideoplayer);
app.get('/11-slideonscroll', vanillajsController.vanillaslideonscroll);
app.get('/12-localstoragetapas', vanillajsController.vanillalocalstoragetapas);
app.get('/13-sortbands', vanillajsController.vanillasortbands);
app.get('/14-webcam', vanillajsController.vanillawebcam);
app.get('/15-speechdetection', vanillajsController.vanillaspeechdetection);
app.get('/16-speedometer', vanillajsController.vanillaspeedometer);
app.get('/17-magic-moving-highlight', vanillajsController.vanillamagicmovinghighlight);
app.get('/18-texttospeech', vanillajsController.vanillatexttospeech);

/**
  * Server listening
**/
// server.listen(port, () => {
//   console.log(`Server is listening on port ${server.address().port}...`);
// });
app.listen(port, () => {
  console.log(`Server is listening on port ${port} in ${env} mode...`);
});

module.exports = app;
