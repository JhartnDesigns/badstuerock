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
  let input = document.getElementById('myInput');
  let filter = input.value.toUpperCase();
  let section = document.getElementById("gridVare");
  let a = section.getElementsByTagName('a');
  let txtValue = "";

  // Loop through all list items, and hide those who don't match the search query

  for (let i = 0; i < a.length; i++) {
    a = a[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
