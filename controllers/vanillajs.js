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
