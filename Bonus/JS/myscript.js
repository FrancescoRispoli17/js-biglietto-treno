const scelta= prompt('pari o dispari?');
const n= Number(prompt('inserisci un numero'));
const n_pc=Math.floor(Math.random()*9)+1;
const tot=n + n_pc;
if(tot%2 == 0 && scelta=='pari'){
    document.getElementById('risultato').innerHTML='Hai Vinto';
}
else if(tot%2 != 0 && scelta=='dispari'){
    document.getElementById('risultato').innerHTML='Hai Vinto';
}
else{
    document.getElementById('risultato').innerHTML='Hai Perso';
}