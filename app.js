// chiedo quanti km si vogliono percorrere
let totKM = parseInt(prompt("Ciao! Inserisci il numero dei km che vuoi percorrere"));
console.log(totKM);

//controllo se il dato inserito sia un numero
if (isNaN(totKM))
{
    alert(`Non hai inserito un numero, ricarica la pagina per ricominciare`)
}

// chiedo l'età del passeggero
let userAge = parseInt(prompt("Inserisci ora l'età della persona che vuole viaggiare"));
console.log(userAge);

//controllo se il dato inserito sia un numero
if (isNaN(userAge))
{
    alert(`Non hai inserito un numero, ricarica la pagina per ricominciare`)
}

// calcolo costo del biglietto
let ticketPrice = totKM * 0.21;
console.log(ticketPrice);

//verifico se la persona può usufruire di qualche sconto
if (userAge < 18) 
{ 
    ticketPrice = ticketPrice*80/100;
}
else if (userAge >= 65)
{
    ticketPrice = ticketPrice*60/100;
}

let message = `Il costo del biglietto è di ${ticketPrice}€`;
console.log(message);
alert(message);