/*  Arbeidskrav 2
 *  Mattis Pandur Nordlien
 */

/* Initialisering av variabler. */
var postnr = null; 
var menynr = null;
var postnrMIN = 1000;
var postnrMAX = 1999;

var meny=[
    "0 = Calzone",
    "1 = Ost & Skinke",
    "2 = Margarita",
    "3 = BBQ Grill"];

/* Popup tekst */
/* Prompt tekst for å be om postnummer */
var postnrPrompt = "Skriv inn ditt postnummer. \n\nOm du har postnummer mellom 1000 og 1999 får du en gratis pizza!";
/* OM postnummer er gyldig vil bruker bli spurt om menyvalg */
var menynrPrompt = "Hvilket menyvalg fra pizzamenyen vil du ha? \n\n"+meny;
/* Ugyldig postnummer alert*/
var postnrFeil = "Postnummeret er ikke innenfor kampanjens krav, skrev du riktig postnummer? Prøv igjen.";
/* Ugyldig menyvalg */
var menynrFeil = "Valget finnes ikke på menyen, prøv igjen.";
/* Bruker har trykket på avbryt/cancel. */
var avbrutt = "Du har kansellert bestillingen."


/* Funksjon for å sjekke om bruker har tastet inn gyldig postnummer */
function postnrSjekk(){
    postnr = prompt(postnrPrompt);
    
    /* Script vil avslutte dersom bruker trykker på avbryt/cancel, usikker på om dette er beste løsningen, men den funker.*/
    if (postnr === null){
        alert(avbrutt);
        return;
    }
    /* Bruker har tastet inn GYLDIG postnummer og blir bedt om menyvalg */
    else if (postnr >= postnrMIN && postnr <= postnrMAX){
        menynrSjekk();
    } 
    /* Bruker har tastet inn UGYLDIG postnummer og blir bedt postnummer pånytt. */
    else {
        alert(postnrFeil);
        postnrSjekk();
    }
}

/* Funksjon for å sjekke om bruker har tastet inn gyldig menyvalg */ 
function menynrSjekk(){
    menynr = prompt(menynrPrompt);
    
    /* Script vil avslutte dersom bruker trykker på avbryt/cancel, usikker på om dette er beste løsningen, men den funker.*/
    if (menynr === null){
        alert(avbrutt);
        return;
    }
    /* Bruker har tastet inn GYLDIG postnummer og menyvalg, ordrebekreftelse kommer opp */
    /* Måtte legge til (... && meny[menynr] != undefined) for at bruker ikke skulle kunne få undefined ut i ordrebekreftelsen. */
    else if(menynr <= 3 && meny[menynr] != undefined){
        ferdigOrdre();
    } 
    /* Bruker har tastet inn UGYLDIG menyvalg og blir bedt om menyvalg pånytt */
    else {
        alert(menynrFeil);
        menynrSjekk();
    }
}

/* Ordrebekreftelse */
function ferdigOrdre(){
    alert("Pizza "+meny[menynr]+" er på vei til postnummer "+postnr);
}

/* Initialisering av brukerinput */
postnrSjekk();