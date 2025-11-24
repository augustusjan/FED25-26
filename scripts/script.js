

/* knoppen*/
var addFilm = document.querySelector('header li:nth-of-type(1) button');
var menuKnop = document.querySelector('header li:nth-of-type(2) button');
var zoekFilm = document.querySelector('header li:nth-of-type(3) button')

/* navbar */
// bron: https://codepen.io/shooft/pen/JjQLVeB
menuKnop.onclick = menuKnopKlik;

function menuKnopKlik() {

  if (menuKnop.ariaExpanded == "false") {
    menuKnop.ariaExpanded = "true"
  }
  else {
    menuKnop.ariaExpanded = "false"
  }
}
// hier nog doen dat de menu tevoorschijn komt
