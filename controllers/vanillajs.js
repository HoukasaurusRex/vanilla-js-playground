exports.vanilladrums = (req, res) => {
  res.render('vanillajs/01-jsdrumkit', {
    title: 'Vanilla Drums',
    page: '01-jsdrumkit'
  });
}

exports.vanillaclock = (req, res) => {
  res.render('vanillajs/02-js-css-clock', {
    title: 'Vanilla Clock',
    page: '02-js-css-clock'
  });
}

exports.vanillavariables = (req, res) => {
  res.render('vanillajs/03-cssvariables', {
    title: 'Vanilla Variables',
    page: '03-cssvariables'
  });
}

exports.vanillarraysOne = (req, res) => {
  res.render('vanillajs/04-arraycardio-one', {
    title: 'Vanilla Arrays One',
    page: '04-arraycardio-one'
  });
}

exports.vanillaflexpanels = (req, res) => {
  res.render('vanillajs/05-flexpanels', {
    title: 'Flex Panels 💪',
    page: '05-flexpanels'
  });
}
