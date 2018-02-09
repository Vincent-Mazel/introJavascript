(function() {
	"use strict";
	let css_blanc = {
        'background-color': 'black',
            'font-weight': 'bolder',
        'border': 'solid 1px white',
        'color': 'white'
    };

	let css_noir = {
        'background-color': 'white',
        'font-weight': 'bolder',
        'border': 'solid 1px black',
        'color': 'black'
    };

	let css_surbrillance = {
        'background-color': 'red',
        'color': 'white'
    };

	let classBlanche = 'case-blanche';
	let classNoire = 'case-noire';

	$(document).ready(function () {
        for (let i = 0; i < 4; i++) {
            let colonne = $('<tr />');
            let td = colonne;
            for (let k = 0; k < 4; k++) {
                let ligne = $('<td />');
                td.append(
                    ligne.addClass(classBlanche).html("B"),
                    ligne.addClass(classNoire).html("N")
                );
            }
            $('#damier').append(td);
        }

        $('.case-blanche').css(css_blanc).hover(
            function () {
            $(this).css(css_surbrillance);
            },
            function () {
                $(this).css(css_blanc)
            }
        );
        $('.case-noire').css(css_noir).hover(
            function () {
                $(this).css(css_surbrillance);
            },
            function () {
                $(this).css(css_noir);
            }
        );
    });
}) ();
