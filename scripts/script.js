/* knoppen*/
var addFilmButton = document.querySelector('header li:nth-of-type(1) button');
var menuKnop = document.querySelector('header li:nth-of-type(2) button');
var zoekFilm = document.querySelector('header li:nth-of-type(3) button')

var nav = document.querySelector("nav");
var zoek = document.querySelector("header>ul>li:nth-of-type(3) ul");
var voegFilm = document.querySelector("header>ul li>section");

// bron: https://codepen.io/shooft/pen/JjQLVeB
// bron: https://codepen.io/shooft/pen/myepoJo
/* add films */
addFilmButton.onclick = addFilmShow;

function addFilmShow() {
    voegFilm.classList.toggle("showAdd");

    zoek.classList.remove("zoekShow");
    nav.classList.remove("showMenu");
}

/* navbar */
menuKnop.onclick = menuShow;

function menuShow() {
    nav.classList.toggle("showMenu");

    if (menuKnop.ariaExpanded == "false") {
        menuKnop.ariaExpanded = "true";
    }
    else {
        menuKnop.ariaExpanded = "false";
    }
    voegFilm.classList.remove("showAdd");
    zoek.classList.remove("zoekShow");
}

/* add films */
zoekFilm.onclick = zoekShow;

function zoekShow() {
    zoek.classList.toggle("zoekShow");

    voegFilm.classList.remove("showAdd");
    nav.classList.remove("showMenu");
}

