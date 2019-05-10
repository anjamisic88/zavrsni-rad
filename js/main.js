// VARIJABLE

var comtrade = document.getElementById('comtrade');
var david = document.getElementById('david');
var milos = document.getElementById('milos');
var damjan = document.getElementById('damjan');
var ljilja = document.getElementById('ljilja');
var srecko = document.getElementById('srecko');

var svi = [comtrade, david, milos, damjan, ljilja, srecko];

var zadato = [];

for(i=0; i<4; i++) {
    zadato.push(svi[Math.floor(Math.random()*6)]);
}

var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');

t = [t1, t2, t3, t4];

var la1 = document.getElementById('la1');
var la2 = document.getElementById('la2');
var la3 = document.getElementById('la3');
var la4 = document.getElementById('la4');

var la = [la1, la2, la3, la4];

D = [0, 1, 2, 3, 4];

var lb1 = document.getElementById('lb1');
var lb2 = document.getElementById('lb2');
var lb3 = document.getElementById('lb3');
var lb4 = document.getElementById('lb4');

lb = [lb1, lb2, lb3, lb4];

var lc1 = document.getElementById('lc1');
var lc2 = document.getElementById('lc2');
var lc3 = document.getElementById('lc3');
var lc4 = document.getElementById('lc4');

lc = [lc1, lc2, lc3, lc4];

var ld1 = document.getElementById('ld1');
var ld2 = document.getElementById('ld2');
var ld3 = document.getElementById('ld3');
var ld4 = document.getElementById('ld4');

ld = [ld1, ld2, ld3, ld4];

var le1 = document.getElementById('le1');
var le2 = document.getElementById('le2');
var le3 = document.getElementById('le3');
var le4 = document.getElementById('le4');

le = [le1, le2, le3, le4];

var f1 = document.getElementById('lf1');
var lf2 = document.getElementById('lf2');
var lf3 = document.getElementById('lf3');
var lf4 = document.getElementById('lf4');

lf = [lf1, lf2, lf3, lf4];

var pocetni = document.getElementById('pocetni');
var pogodak = document.getElementById('pogodak');
var promasaj = document.getElementById('promasaj');

var excellent = document.getElementById('excellent');
var welldone = document.getElementById('welldone');
var genije = document.getElementById('genije');
var beautiful = document.getElementById('beautiful');
var obavestenje = document.getElementById('obavestenje');

//FUNKCIJE

// Pravljenje funkcije koja uzima vrednosti niza za poredjenje u trenutku poziva

function nizA() {
     var a1 = document.getElementById('a1');
     var a2 = document.getElementById('a2');
     var a3 = document.getElementById('a3');
     var a4 = document.getElementById('a4');

     a = [a1, a2, a3, a4];
}

nizA();

function nizB() {
    var b1 = document.getElementById('b1');
    var b2 = document.getElementById('b2');
    var b3 = document.getElementById('b3');
    var b4 = document.getElementById('b4');

    b = [b1, b2, b3, b4];
}

nizB();

function nizC() {
     var c1 = document.getElementById('c1');
     var c2 = document.getElementById('c2');
     var c3 = document.getElementById('c3');
     var c4 = document.getElementById('c4');

     c = [c1, c2, c3, c4];
}

nizC();

function nizD() {
    var d1 = document.getElementById('d1');
    var d2 = document.getElementById('d2');
    var d3 = document.getElementById('d3');
    var d4 = document.getElementById('d4');

    d = [d1, d2, d3, d4];
}

nizD();

function nizE() {
    var e1 = document.getElementById('e1');
    var e2 = document.getElementById('e2');
    var e3 = document.getElementById('e3');
    var e4 = document.getElementById('e4');

    e = [e1, e2, e3, e4];
}

nizE();

function nizF() {
    var f1 = document.getElementById('f1');
    var f2 = document.getElementById('f2');
    var f3 = document.getElementById('f3');
    var f4 = document.getElementById('f4');

    f = [f1, f2, f3, f4];
}

nizF();

var sviNizovi = [];

sviNizovi.push(a);
sviNizovi.push(b);
sviNizovi.push(c);
sviNizovi.push(d);
sviNizovi.push(e);
sviNizovi.push(f);


function povecajD(i) {
    D[i] = i + 1;
}

//Pravljenje funkcije kojom izabrani simbol odlazi na mesto izabrano od strane korisnika

function postavi (m) {
    function popuniA() {
        for(var i =0; i < 1; i++) {
            for(var j = 0; j < 4; j++) {
                if(sviNizovi[i][j].src == pocetni.src) {
                    sviNizovi[i][j].src = m.src;
                    break;
                }
            }
        }
    }
    popuniA();

    for(var i = 1; i < sviNizovi.length; i++) {
        for(var j = 0; j < 4; j++) {
            if((D[i] == (i + 1)) && (sviNizovi[i][j].src == pocetni.src)) {
                sviNizovi[i][j].src = m.src;
                break;
            }
        }
    }
}

//Pravljenje funkcije kojom se prikazuje zadata kombinacija

function otvoriZadato() {
       
    for(var i = 0; i < 4; i++) {
            t[i].src = zadato[i].src;
    }  
}

//Pravljenje funkcije koja poredi unet niz sa zadatim i ispisuje rezultat

function provera(m, lm) {

    var brojacCrvenii = 0;
    var koefSvi = [];
    var zbirKoefaa = 0;

//Pravljenje funkcije kojom se broje isti simboli

    function koeficijent(q, m) {

        var koefa = 0;
        var koefz = 0;
        var koef = 0; 
    
        function ko1 () {
            for(var i = 0; i < m.length; i++) {
                if(m[i].src == q.src) {
                    koefa++;
                }
            }
        }

        ko1();

        function ko2() {
            for(var j = 0; j < zadato.length; j++) {
                if(zadato[j].src == q.src) {
                        koefz++;
                }
            }
        }

        ko2();

        if(koefa >= koefz) {
                koef = koefz;
        } else koef = koefa;
            koefSvi.push(koef);
    }
 
    koeficijent(milos, m);
    koeficijent(ljilja, m);
    koeficijent(david, m);
    koeficijent(damjan, m);
    koeficijent(comtrade, m);
    koeficijent(srecko, m);

    function dobitiZbir() {
        
        var zbirKoefa = 0;
            
        for(var s = 0; s < koefSvi.length; s++) {
                zbirKoefa = zbirKoefa + koefSvi[s];
        }
        zbirKoefaa = zbirKoefa;
    }

    dobitiZbir();

    function dobitiCrveniBrojac() {
        
        var brojacCrveni = 0;
           
        for(var v = 0; v < 4; v++) {
            if(m[v].src ==  zadato[v].src) {
                    brojacCrveni++;
            }
        }
        
        brojacCrvenii = brojacCrveni;
    }

    dobitiCrveniBrojac();

    function oboji() {

        for(var i = 0; i < 4; i++) {
            if(i < brojacCrvenii) {
                lm[i].src = pogodak.src;
            } else if(i < zbirKoefaa) {
                lm[i].src = promasaj.src;
                }
        }
    }

    oboji();

    function pitanje() {
        if((lm[3].src == pogodak.src)){
            otvoriZadato();
        }
    }

    pitanje();

    function menjajObavestenje() {
        if((la[3].src == pogodak.src) || (lb[3].src == pogodak.src) || (lc[3].src == pogodak.src)) {
            obavestenje.src = genije.src;
        } else if((ld[3].src == pogodak.src) || (le[3].src == pogodak.src)) {
            obavestenje.src = excellent.src;
        } else if(lf[3].src == pogodak.src) {
            obavestenje.src = welldone.src;
        } else if((f[3].src != pocetni.src) && (lf[3].src != pogodak.src)) {
            obavestenje.src = beautiful.src;
        }
    }
    menjajObavestenje();
}

//Pravljenje funkcije za brisanje unetih vrednosti

function obrisi(k) {
        k.src = pocetni.src;
}

//Pravljenje "majke" funkcije kako bi se obe funkcije obavile klikom na dugme

function majkaA() {
    nizA();
    provera(a, la);
}

function majkaB() {
    nizB();
    provera(b, lb);
}

function majkaC() {
    nizC();
    provera(c, lc);
}

function majkaD() {
    nizD();
    provera(d, ld);
}

function majkaE() {
    nizE();
    provera(e, le);
}

function majkaF() {
    nizF();
    provera(f, lf);
    otvoriZadato();
}

//IZVRSENJE

$(document).ready(function() {
    $('#new').on('click', function() {
        location.reload();
    })
    $('#comtrade').on('click', function() {
        postavi(comtrade);
    });
    $('#david').on('click', function() {
        postavi(david);
    });
    $('#milos').on('click', function() {
        postavi(milos);
    });
    $('#damjan').on('click', function() {
        postavi(damjan);
    });
    $('#ljilja').on('click', function() {
        postavi(ljilja);
    });
    $('#srecko').on('click', function() {
        postavi(srecko);
    });
    $('#dugme1').on('click', function() {
        majkaA();
        $('#dugme2').removeClass('dugme1').addClass('dugme');
        povecajD(1);
    });
    $('#dugme2').on('click', function() {
        majkaB();
        $('#dugme3').removeClass('dugme1').addClass('dugme');
        povecajD(2);
    });
    $('#dugme3').on('click', function() {
        majkaC();
        $('#dugme4').removeClass('dugme1').addClass('dugme');
        povecajD(3);
    });
    $('#dugme4').on('click', function() {
        majkaD();
        $('#dugme5').removeClass('dugme1').addClass('dugme');
        povecajD(4);
    });
    $('#dugme5').on('click', function() {
        majkaE();
        $('#dugme6').removeClass('dugme1').addClass('dugme');
        povecajD(5);
    });
    $('#dugme6').on('click', function() {
        majkaF();
    });
    $('#a1').on('click', function() {
        obrisi(this);
    });
    $('#a2').on('click', function() {
        obrisi(this);
    });
    $('#a3').on('click', function() {
        obrisi(this);
    });
    $('#a4').on('click', function() {
        obrisi(this);
    });
    $('#b1').on('click', function() {
        obrisi(this);
    });
    $('#b2').on('click', function() {
        obrisi(this);
    });
    $('#b3').on('click', function() {
        obrisi(this);
    });
    $('#b4').on('click', function() {
        obrisi(this);
    });
    $('#c1').on('click', function() {
        obrisi(this);
    });
    $('#c2').on('click', function() {
        obrisi(this);
    });
    $('#c3').on('click', function() {
        obrisi(this);
    });
    $('#c4').on('click', function() {
        obrisi(this);
    });
    $('#d1').on('click', function() {
        obrisi(this);
    });
    $('#d2').on('click', function() {
        obrisi(this);
    });
    $('#d3').on('click', function() {
        obrisi(this);
    });
    $('#d4').on('click', function() {
        obrisi(this);
    });
    $('#e1').on('click', function() {
        obrisi(this);
    });
    $('#e2').on('click', function() {
        obrisi(this);
    });
    $('#e3').on('click', function() {
        obrisi(this);
    });
    $('#e4').on('click', function() {
        obrisi(this);
    });
    $('#f1').on('click', function() {
        obrisi(this);
    });
    $('#f2').on('click', function() {
        obrisi(this);
    });
    $('#f3').on('click', function() {
        obrisi(this);
    });
    $('#f4').on('click', function() {
        obrisi(this);
    });
    
});


console.log(zadato);


