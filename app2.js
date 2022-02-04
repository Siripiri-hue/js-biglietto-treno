// chiedo l'anno di nascita
let userBdYear = parseInt(prompt("Ciao! Per calcolare il prezzo del biglietto, inserisci l'anno di nascita del passeggero"));
console.log(`Il tuo anno di nascita: ${userBdYear}`);

// calcolo la data corrente
let currentYear = new Date();
currentYear = currentYear.getFullYear();
console.log(`Siamo nell'anno ${currentYear}`);

//verifico se l'anno inserito è corretto
if ( (userBdYear > currentYear) || (userBdYear < 1900) || (isNaN(userBdYear)) ) 
{
    alert("Hai inserito un dato non corretto, ricarica la pagina per ricominciare");
}
else
{
    // calcolo l'età del passeggero
    let userAge = currentYear - userBdYear;
    console.log(`La tua età è ${userAge} anni`);

    // chiedo quanti km si vogliono percorrere
    let totKM = parseInt(prompt("Inserisci il numero dei km che vuoi percorrere"));
    console.log(`I km che vuoi percorrere sono ${totKM}`);

    // verifico che il numero di km sia un dato corretto
    if (isNaN(totKM))
    {
        alert(`Hai inserito un dato non corretto, ricarica la pagina per ricominciare`);
    }
    else {
        if (totKM > 1500)
        {
            alert("Il massimo numero di km che puoi percorrere è 1500")
        }
        else {
            let ticketPrice = totKM * 0.21; //calcolo prezzo biglietto
            console.log(`Il totale parziale del biglietto è ${ticketPrice}`);
            if (userAge < 18) //controllo se il passeggero è maggiorenne
            { 
                ticketPrice = (ticketPrice*80)/100; //applico lo sconto
            }
            else if (userAge >= 65) //controllo se il passeggero è ultra65enne
            {
                ticketPrice = (ticketPrice*60)/100; //applico lo sconto
            }
            ticketPrice = ticketPrice.toFixed(2); //arrotondo a due num decimali
            let message = `Il costo del biglietto è di ${ticketPrice}€`; //messaggio finale
            console.log(message);
            alert(message);
        }
    }
}