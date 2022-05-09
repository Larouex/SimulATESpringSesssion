module.exports = async function (context, req) {
    context.log('Creating the Footer');
    var buildVersion = "202101602-1.0.0.45";
    context.res.json({
      text:
        '<footer class="footer bg-dark">' +
        '<div class="container">' +
        '<hr />' +
        '<div class="row">' +
        '<div class="col-lg-8 h-100 text-center text-lg-left my-auto">' +
        '<ul class="list-inline mb-2">' +
        '<li class="list-inline-item">' +
        '<a href="./about-us.html">About</a>' +
        "</li>" +
        '<li class="list-inline-item">&sdot;</li>' +
        '<li class="list-inline-item">' +
        '<a href="./contact-us.html">Contact</a>' +
        "</li>" +
        '<li class="list-inline-item">&sdot;</li>' +
        '<li class="list-inline-item">' +
        '<a href="./sustainability.html">Sustainability Plan</a>' +
        "</li>" +
        '<li class="list-inline-item">&sdot;</li>' +
        '<li class="list-inline-item">' +
        '<a href="./privacy-policy.html">Privacy Policy</a>' +
        "</li>" +
        "</ul>" +
        '<p class="text-muted mb-4 mb-lg-0">' +
        "&copy; " + process.env.Copyright +
        "<br />" +
        "<br />" +
        "Saluminator&trade; and the Saluminator Logo&trade; are" +
        " registered trademarks of Larouex Gourmet Foods LLC and cannot be" +
        " used without our expressed and written authorization." +
        "</p>" +
        "<br />" +
        '<p class="text-muted mb-4 mb-lg-0">' +
        '<small><b id="build">Build 20220402-1 Version ' +
        buildVersion +
        "</b></small>" +
        "</p>" +
        "</div>" +
        '<div class="col-lg-4 h-100 text-center text-lg-right my-auto">' +
        '<ul class="list-inline mb-0">' +
        '<li class="list-inline-item mr-3">' +
        '<a href="https://www.facebook.com/LarouexFoods">' +
        '<i class="fab fa-facebook fa-2x fa-fw"></i>' +
        "</a>" +
        "</li>" +
        '<li class="list-inline-item">' +
        '<a href="#">' +
        '<i class="fab fa-instagram fa-2x fa-fw"></i>' +
        "</a>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</footer>",
    });
  };
  