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
