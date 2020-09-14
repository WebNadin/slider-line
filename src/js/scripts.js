//= partials/helper.js

document.addEventListener("DOMContentLoaded", function (event) {
  console.log('Hello');
});

$(document).ready(function () {

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true,
    //dots: true,
    //dotsClass: 'custom_paging',
    //customPaging: function (slider, i) {
    //  //FYI just have a look at the object to find available information
    //  //press f12 to access the console in most browsers
    //  //you could also debug or look in the source
    //  console.log(slider);
    //  return (i + 1) + '/' + slider.slideCount;
    //}
  });
});






