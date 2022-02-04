// chiedo quanti km si vogliono percorrere
let totKM = parseInt(prompt("Ciao! Inserisci il numero dei km che vuoi percorrere"));
console.log(totKM);

// chiedo l'età del passeggero
let userAge = parseInt(prompt("Inserisci ora l'età della persona che vuole viaggiare"));
console.log(userAge);

//controllo se i dati inseriti siano numeri 
if ( (isNaN(userAge)) || (isNaN(totKM)) )
{
    alert(`Non hai inserito un numero, ricarica la pagina per ricominciare`);
}
else {
    let ticketPrice = totKM * 0.21; //calcolo prezzo biglietto
    console.log(ticketPrice);
    if (userAge < 18) //controllo se il passeggero è maggiorenne
    { 
        ticketPrice = ticketPrice*80/100; //applico lo sconto
    }
    else if (userAge >= 65) //controllo se il passeggero è ultra65enne
    {
        ticketPrice = ticketPrice*60/100; //applico lo sconto
    }
    ticketPrice = ticketPrice.toFixed(2); //arrotondo a due num decimali
    let message = `Il costo del biglietto è di ${ticketPrice}€`; //messaggio finale
    console.log(message);
    alert(message);
}