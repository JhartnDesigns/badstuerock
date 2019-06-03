     // Scrolling Effect

     $(window).on("scroll", function() {
           if($(window).scrollTop() > 400) {
                 $('.navbarforside').addClass('black');
           }

           else {
                 $('.navbarforside').removeClass('black');
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

fetch('json/vare.json')
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    console.log(json);
    appendVare(json.vare);
  });

  //
function appendVare(vares) {
  for (let vare of vares) {
    console.log(vare);
    gridVare.innerHTML += `
      <article class="gridItem">
      <img src="img/${vare.img}">
      <h4>${vare.kunstner}</h4>
      <p>${vare.album}</p>
      </article>
      `;
  }
}
