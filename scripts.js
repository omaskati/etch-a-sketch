
const container = document.querySelector("#container");
createGrid(16);

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