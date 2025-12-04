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
    // nav.toggleAttribute(inert);

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

/* trailer knop */
var trailerKnop = document.querySelector("main section:first-of-type button");
var trailerSluitKnop = document.querySelector("dialog button");

var trailerDialog = document.querySelector("dialog");


trailerKnop.onclick = trailerShow;

// bron: https://codepen.io/shooft/pen/vENrZvj
function trailerShow() {
    trailerDialog.showModal();
}

trailerSluitKnop.onclick = trailerClose;

var trailer = document.querySelector("iframe");

function trailerClose() {
    trailerDialog.close();
    trailer.src = trailer.src;
}



