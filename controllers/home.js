exports.home = (req, res) => {
  res.render('home'), {
    title: 'JTH',
    page: '/',
    class: 'home',
  };
};
