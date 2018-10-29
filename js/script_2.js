/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

/*MICROINTERACTIE 2 - ALLE VERHALEN DOWNLOADEN*/
var allesDownloaden = document.querySelector('#download');
var dowButton = document.querySelector('#download');
var balk = document.querySelector('.pagina div:first-of-type');
var melding = document.querySelector('#melding');
var downloadKnoppen = document.querySelectorAll('.dl-knop');
//console.log("downloadKnoppen", downloadKnoppen);

allesDownloaden.addEventListener('click', function () {
	dowButton.classList.toggle('show');
	balk.classList.toggle('show');
	document.querySelector('.pagina > p').textContent = ("Downloaden. . .");

	for (var i = 0; i < downloadKnoppen.length; i++) {
		downloadKnoppen[i].src = ("images/download-load.gif");
	}

	setTimeout(function () {
		document.querySelector('.pagina > p').textContent = ("Alles gedownload!");
		melding.classList.add('show');

		for (var i = 0; i < downloadKnoppen.length; i++) {
			downloadKnoppen[i].src = ("images/download-finished.png");
		}
	}, 3000);
});
