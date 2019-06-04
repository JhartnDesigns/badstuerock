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
      <a href="#" class="gridItem">
      <img src="img/${vare.img}">
      <h5>${vare.kunstner}</h5>
      <p>${vare.album}</p>
      </a>
      `;
  }
}


function search() {
  // Declare variables
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();

  let aTags = document.querySelectorAll("#gridVare a");
  console.log(aTags);
  let txtValue = "";

  // Loop through all a items, and hide those who don't match the search query

  for (let i = 0; i < aTags.length; i++) {
    let aTag = aTags[i];
    let artistName = aTag.getElementsByTagName("h5")[0];
    txtValue = artistName.textContent || artistName.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      aTag.style.display = "";
    } else {
      aTag.style.display = "none";
    }
  }
}
