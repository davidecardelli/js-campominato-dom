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

    // Pulisco la griglia onde evitare che ad ogni click si generino 100 caselle
    grid.innerHTML = '';

    // Mi creo un for che mi vada a creare 100 celle
    for (let i = 1; i <= 100; i++) {

        const cell = createdCells(i);

        // Inserisco un azione al clic di ogni cella che mi vada ad inserire la class css selected
        cell.addEventListener('click', function () {
            cell.classList.add('selected');
            console.log(i);
          })
  
        grid.appendChild(cell);
    }

})