module.exports = async function (context, req) {
    context.log('Creating the Navigation');
    context.res.json({
      text:
      '<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">' +
      '<div class="container">' +
      '<a class="navbar-brand" href="#">' +
      '<img src="/img/saluminator-28-trans.png" height="28" alt="Saluminator" />' +
      ' Norcini Artisians' +
      '</a>' +
      '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText">' +
      '<span class="navbar-toggler-icon"></span>' +
      '</button>' +
      '<div class="collapse navbar-collapse" id="navbarText">' +
      '<ul class="navbar-nav me-auto mb-2 mb-lg-0">' +
      '<li class="nav-item">' +
      '<a class="nav-link" href="#">About</a>' +
      '</li>' +
      '<li class="nav-item">' +
      '<a class="nav-link" href="#">Contact Us</a>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</nav>',
    });
  };
 
