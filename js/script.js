/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*als je op de button favoriet klikt klapt het 'voeg toe aan een lijst' open*/
var buttonFavoriet = document.querySelector('article > footer > button');

var kiesLijst = document.querySelector('#kies-lijst');


buttonFavoriet.addEventListener('click', function () {
	kiesLijst.classList.add('show');
});

/*Als je op 'Griekenland' klikt sluit de lijst weer*/
var sluitButton = document.querySelector('#kies-lijst button:nth-of-type(2)');

var toegevoegdMelding = document.querySelector('#toegevoegd-lijst');

sluitButton.addEventListener('click', function () {
	kiesLijst.classList.remove('show');
});

sluitButton.addEventListener('click', function () {
	toegevoegdMelding.classList.add('show');
});
