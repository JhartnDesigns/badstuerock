     // Scrolling Effect

     $(window).on("scroll", function() {
           if($(window).scrollTop() > 500) {
                 $('navbar').addClass('black');
           }

           else {
                 $('navbar').removeClass('black');
           }
     });

//Ny sektion
(function($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });

})
//Varekatalog
const doc = document;

fetch('json/data.json')
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    console.log(json);
    appendVare(json.vare)
  });
