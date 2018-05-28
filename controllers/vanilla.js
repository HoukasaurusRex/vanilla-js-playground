exports.vanilladrums = (req, res) => {
  res.render('vanilla/01-jsdrumkit', {
    title: 'Vanilla Drums',
    page: '01-jsdrumkit'
  });
}

exports.vanillaclock = (req, res) => {
  res.render('vanilla/02-js-css-clock', {
    title: 'Vanilla Clock',
    page: '02-js-css-clock'
  });
}

exports.vanillavariables = (req, res) => {
  res.render('vanilla/03-cssvariables', {
    title: 'Vanilla Variables',
    page: '03-cssvariables'
  });
}

exports.vanillarrays = (req, res) => {
  res.render('vanilla/04-arraycardio', {
    title: 'Vanilla Arrays',
    page: '04-arraycardio'
  });
}

exports.vanillaflexpanels = (req, res) => {
  res.render('vanilla/05-flexpanels', {
    title: 'Flex Panels 💪',
    page: '05-flexpanels'
  });
}

exports.vanillatypeahead = (req, res) => {
  res.render('vanilla/06-typeahead', {
    title: 'Type Ahead 👀',
    page: '06-typeahead'
  });
}

exports.vanillacanvas = (req, res) => {
  res.render('vanilla/07-canvas', {
    title: 'Canvas',
    page: '/07-canvas'
  });
}

exports.vanillaconsole = (req, res) => {
  res.render('vanilla/08-consolecommander', {
    title: 'Console Commander',
    page: '/08-consolecommander'
  });
}

exports.vanillamulticheck = (req, res) => {
  res.render('vanilla/09-multicheck', {
    title: 'Multicheck',
    page: '/09-multicheck'
  });
}

exports.vanillavideoplayer = (req, res) => {
  res.render('vanilla/10-videoplayer', {
    title: 'Video Player',
    page: '/10-videoplayer',
    class: 'videoplayer'
  });
}

exports.vanillaslideonscroll = (req, res) => {
  res.render('vanilla/11-slideonscroll', {
    title: 'Slide on Scroll',
    page: '/11-slideonscroll',
    class: 'slideonscroll'
  });
}

exports.vanillalocalstoragetapas = (req, res) => {
  res.render('vanilla/12-localstoragetapas', {
    title: 'Local Tapas',
    page: '/12-localstoragetapas',
    class: 'localtapas'
  });
}
