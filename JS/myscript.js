const Km= prompt('inserisci i kilometri');
const eta= prompt('inserisci età');
let prezzo=Km*0.21;
if(eta < 18)
{
    prezzo=prezzo - prezzo / 5;
}

const prezzo_finale=document.getElementById('prezzo');
prezzo_finale.innerHTML=prezzo;