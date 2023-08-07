import './assets/scss/all.scss';
import 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';

$(document).ready(function () {
    $('.burger-menu').click(function (e) {
      $('.navbar-nav').toggleClass('active')
    })
  });