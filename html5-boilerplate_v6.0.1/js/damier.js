let Damier;
(function () {
    "use strict";

    Damier = function (h,l, destination) {
        this.playerencours = true;
        this.get_carac = function () {
            if (this.playerencours)
                return '\u07f7';
            else
                return '\u0ba3';
        };
        this.test_victoire = function () {
            for (let i = 0; i < 1; i++) {
                for (let k = 0; k < 1; k++) {
                    if (self.tab[i][k] !== null && self.tab[i][k] === self.tab[i][k+1] && self.tab[i][k+1] === self.tab[i][k+2])
                        return true;
                    if (self.tab[i][k] !== null && self.tab[i][k] === self.tab[i+1][k] && self.tab[i+1][k] === self.tab[i+2][k])
                        return true;
                }

            }
        };
        this.tab = [];
        this.click_case = function () {
            let x = $(this).data('x');
            let y = $(this).data('y');
            $(this).html(self.get_carac());
            self.tab[x][y] = self.get_carac();
            if (self.test_victoire())
                self.destination.slideUp(1000, function () {
                    $(this).html('SUPERBER PERFORMANCE DU JOUEUR FRANCAIS').slideDown(1000);
                })
            else
                self.playerencours = !self.playerencours;
        };
        let self = this;
        $(document).ready(function () {
            for (let i = 0; i < l; i++) {
                let td = $('<tr />');
                self.tab[i] = [];
                for (let k = 0; k < h; k++) {
                    let ligne = $('<td />');
                    self.tab[i].push('');
                    if (i % 2 === 0 && k % 2 === 0 || i % 2 !== 0 && k % 2 !== 0)
                        td.append(
                            ligne.addClass('case-blanche')
                                 .html("B")
                                 .data('x', i)
                                 .data('y', k)
                                 .click(self.click_case)
                        );
                    else
                        td.append(
                            ligne.addClass('case-noire')
                                 .html("N")
                                 .data('x', i)
                                 .data('y', k)
                                 .click(self.click_case)
                        );
                }
                $(destination).append(td);
            }
        });
    }
}) ();