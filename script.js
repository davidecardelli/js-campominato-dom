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
const totalPoint = document.getElementById('total-point');


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

    // Preparo la variabile che mi porti il punteggio
    let score = 0;
    const totalBombs = 16;
    const maxPoint = 100 - totalBombs; 
    console.log('Il punteggio massimo è: ' + maxPoint)

    // Genero le bombe
    const bomb = generateBomb(1, 100, totalBombs);

    // Mi creo un for che mi vada a creare 100 celle
    for (let i = 1; i <= 100; i++) {

        const cell = createdCells(i);
        
        // Inserisco un azione al clic di ogni cella che mi vada ad inserire la class css selected
        cell.addEventListener('click', function () {

            // Controllo che una cella non sia stata cliccata: se cell contiene selected, mi butta fuori
            if (cell.classList.contains('selected')) {
                return;
            }

            cell.classList.add('selected');

            const itsABomb = bomb.includes(parseInt(cell.innerText));

            if (itsABomb) {
                cell.classList.add('bomb');
                totalPoint.innerText = 'Hai perso, il tuo punteggio è: ' + score;
            }
            else {
                totalPoint.innerText = 'Il tuo punteggio è: ' + ++score;
                if (maxPoint === score) {
                    totalPoint.innerText = 'Hai vinto! Hai totalizzato ' + score + ' punti';
                }
            }


        })
  
        grid.appendChild(cell);
    }

})