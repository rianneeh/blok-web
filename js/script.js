/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*MICROINTERACTIE 1 - EEN VERHAAL TOEVOEGEN AAN EEN LIJST*/
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

/*als je op Griekenland klikt komt er een melding dat het verhaal is toegevoegd aan een lijst.*/
sluitButton.addEventListener('click', function () {
	toegevoegdMelding.classList.add('show');
});

var bekijkButton = document.querySelector('#toegevoegd-lijst a');

bekijkButton.addEventListener('click', function () {
	toegevoegdMelding.classlist.remove('show');
});
