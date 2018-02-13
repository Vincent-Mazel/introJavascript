(function() {
	"use strict";

    let css_blanc = {
        'background-color': 'orange',
        'font-weight': 'bolder',
        'border': 'solid 1px white',
        'color': 'purple',
        'width': '150px',
        'height': '150px',
        'text-align': 'center'
    };

    let css_noir = {
        'background-color': 'purple',
        'font-weight': 'bolder',
        'border': 'solid 1px black',
        'color': 'orange',
        'width': '150px',
        'height': '150px',
        'text-align': 'center'

    };

    let css_surbrillance = {
        'background-color': 'red',
        'color': 'white'
    };

    new Damier(3, 3, '#damier');

    $(document).ready(function () {
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
