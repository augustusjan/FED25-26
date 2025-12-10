/* knoppen header */
let addFilmButton = document.querySelector('header li:nth-of-type(1) button');
let menuKnop = document.querySelector('header li:nth-of-type(2) button');
let zoekFilm = document.querySelector('header li:nth-of-type(3) button')

/* knoppen trailer */
let trailerKnop = document.querySelector("main section:first-of-type button");
let trailerSluitKnop = document.querySelector("dialog button");

/* header */
let nav = document.querySelector("nav");
let zoek = document.querySelector("header>ul>li:nth-of-type(3) ul");
let voegFilm = document.querySelector("header>ul li>section");
/* trailer */
let trailerDialog = document.querySelector("dialog");
let trailer = document.querySelector("iframe");

// bron: https://codepen.io/shooft/pen/JjQLVeB
// bron: https://codepen.io/shooft/pen/myepoJo
/* add films */
addFilmButton.onclick = addFilmShow;

function addFilmShow() {
    voegFilm.classList.toggle("showAdd");

    zoek.classList.remove("zoekShow");
    nav.classList.remove("showMenu");
    menuKnop.ariaExpanded = "false"
}

/* navbar */
menuKnop.onclick = menuShow;

function menuShow() {
    nav.classList.toggle("showMenu");

    // als het bijbehorden menu gesloten is, en geopened wordt
    // het aria-expanded attribuut van de button op true zetten
    // hamburger menu change icon bron: https://codepen.io/shooft/pen/JjQLVeB
    if (menuKnop.ariaExpanded == "false") {
        menuKnop.ariaExpanded = "true"
    }
    else {
        menuKnop.ariaExpanded = "false"
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
    menuKnop.ariaExpanded = "false"
}

/* trailer */
trailerSluitKnop.onclick = trailerClose;
trailerKnop.onclick = trailerShow;

// bron: https://codepen.io/shooft/pen/vENrZvj
function trailerShow() {
    trailerDialog.showModal();
}

function trailerClose() {
    trailerDialog.close();
    // dit herlaadt de trailer, zodat de video niet doorspeelt als je de modal sluit via het kruisj
    trailer.src = trailer.src;
}



