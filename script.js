// -----
// CREO FUNZIONI
// -----

// Funzione che mi generi l'array con le bombe
function generateBomb(min, max, numbersOfBomb) {

    const randomNumbers = [];
    
    do {
        const myRandomNumber = Math.floor(Math.random() * (max - min)) + min;
        randomNumbers.push(myRandomNumber);
    }
    
    while (randomNumbers.length < numbersOfBomb);


    return randomNumbers
}


// Prendo il bottone play e la griglia dal dom

const grid = document.getElementById('grid');
const buttonPlay = document.getElementById('play-button');

// Creo funzione che mi consenta di creare le cells con all'interno il numero corrispondente

function createdCells(number){
    const cell = document.createElement('div');
    cell.classList.add('cells');
    cell.append(number);
    return cell;
}

// Aggiungo event listner al bottone play

buttonPlay.addEventListener('click', function(){

    // Modifico pulsante Play in New Game, per permettere all'utente di riniziare la partita
    buttonPlay.innerText= 'New Game';

    // Pulisco la griglia onde evitare che ad ogni click si generino 100 caselle
    grid.innerHTML = '';

    // Genero le bombe
    bomb = generateBomb(1, 100, 16);
    console.log(bomb);


    // Mi creo un for che mi vada a creare 100 celle
    for (let i = 1; i <= 100; i++) {

        const cell = createdCells(i);
        
        // Inizializzo il punteggio
        score = -1

        // Inserisco un azione al clic di ogni cella che mi vada ad inserire la class css selected
        cell.addEventListener('click', function () {

            score++

            for (let y = 0; y < bomb.length; y++) {
                if (bomb[y] === i) {
                    cell.classList.add('bomb');
                    alert(`Hai perso, il tuo punteggio è ${score}`);
                }
                else {
                    cell.classList.add('selected');
                
                }
            }

        })
  
        grid.appendChild(cell);
    }

})