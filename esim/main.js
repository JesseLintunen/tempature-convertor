function laske(){

   let luku1 = document.getElementById('luku1').value * 1;
   let luku2 = document.getElementById('luku2').value * 1;
   let toiminto = document.getElementById('toiminto').value;
    let tulos = '';

   if (toiminto == 'valitse'){
     tulos="et valinnut mitään toimintoa";   
    console.log('et valinnut mitään toimintoa');
   } else if (toiminto == 'miinus') {
       tulos = miinus(luku1, luku2);
        console.log('valitsit miinus-laskun');
   } else {
        console.log('valitsit plus-laskun')
        tulos = plus(luku1, luku2);
   }

   tulostaVastaus(tulos);
   

}

function plus(x, y){
    return x + y;

}

function miinus(x, y){
    return x - y;
}

function tulostaVastaus(vastaus){
    document.getElementById('vastaus').innerHTML = vastaus;
}