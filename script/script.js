//seleziono il contenitore ed il bottone
const container = document.getElementById("grid");
const myBtn = document.querySelector("button");

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
myBtn.addEventListener("click",generateGrid,addClass);
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
addClass();

/*************** 
    FUNZIONI
 *******************/ 

//Funzione Grid Generator
function generateGrid() {
    //aggiungo i blocchi per 100 volte
    for(let i = 0; i < 100; i++) {
    //creo uno square
    const nuovobox = createElementWithClass("div", "square");
    //aggiungo il blocco al contenitore
    container.append(nuovobox);
    }   
}


//Funzione che crea un elemento html
function createElementWithClass(tag, classToAdd) {
    //creo l'elemento 
    const element = document.createElement(tag);
    //aggiungo la classe principale
    element.classList.add(classToAdd);

    return element;
}


//Funzione add class 
function addClass() {
    for(let i = 0; i < 100; i++) {
    //Gestisco il click sul singolo elemento
    const box = document.querySelectorAll(".square");
    console.log(box);
    box.addEventListener("click",
        function(){
            this.classList.toggle("clicked");
        }
    );
    }   
}