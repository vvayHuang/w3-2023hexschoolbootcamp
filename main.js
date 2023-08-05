import './assets/scss/all.scss';

$(document).ready(function () {
    $('.burger-menu').click(function (e) {
      $('.navbar-nav').toggleClass('active')
    })
  });