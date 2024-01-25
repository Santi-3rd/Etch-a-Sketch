const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('grid');
let gridSize = 16;

let size = document.querySelector('#size')
    size.onclick = function(){
        sizeNum = prompt("Select your grid size.")
        if (sizeNum < 100 && sizeNum > 16) {
            gridSize = sizeNum
        }

    }


for (let i = 0; i < gridSize * gridSize; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('gridSquare');
    content.appendChild(gridSquare);
    hover(gridSquare)
}



function hover(gridSquare){
    gridSquare.addEventListener("mouseover", event => {
        gridSquare.style.backgroundColor = "black"
    });
}


container.appendChild(content);


