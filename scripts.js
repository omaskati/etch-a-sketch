
const container = document.querySelector("#container");
const sizeButton = document.querySelector("button#setSize");
sizeButton.addEventListener("click", getSizeFromUser)

const DEFAULT_GRID_SIZE = 16;
let currentGridSize = DEFAULT_GRID_SIZE;

createGrid(DEFAULT_GRID_SIZE);

// MAKE 16 x 16 DIV GRID
function createGrid(size){
    for (let i=0; i<size; i++){

        let row = document.createElement('div');
        row.classList.add("row");
        container.appendChild(row);

        for (let j = 0; j < size; j++){
            let cell = document.createElement('div');
            cell.classList.add("cell");
            cell.addEventListener("mouseenter", ()=>{
                fillCell(cell);
            });
            cell.addEventListener("mouseleave", ()=>{
                clearCell(cell);
            })
            row.appendChild(cell);
        }
    }
}

function fillCell(cell){
    cell.classList.add("filled");
}

function clearCell(cell){
    cell.classList.remove("filled");
}

function clearGrid(){
    container.innerHTML="";
}

function getSizeFromUser(){
    let size = 0;
     do{
       size = prompt("Enter the number of squares per side (1-100)", currentGridSize);
       if(size === null) return;
     }
    while(size < 1 || size > 100);
    clearGrid();
    currentGridSize = size;
    createGrid(size);
}