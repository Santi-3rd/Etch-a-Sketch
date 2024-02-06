const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('grid');
let gridSize = 16;
let rainbowMode = document.querySelector('#rainbow');
let shaderMode = document.querySelector('#shading');

createGrid()


const slider = document.getElementById('numberSlider');
const output = document.getElementById('selectedNumber');
let sliderValueChanged = false;

slider.oninput = function() {
    const selectedNumber = this.value;
    output.textContent = `${selectedNumber} x ${selectedNumber}`;
    gridSize = selectedNumber
    sliderValueChanged = true;
};
slider.onmouseup = function() {
    if (sliderValueChanged) {
        createGrid();
        sliderValueChanged = false;
    }
};


let clear = document.querySelector('#clear')
    clear.onclick = function(){
        createGrid()
        content.classList.add('shake-animation');
    
        content.addEventListener('animationend', function() {
            content.classList.remove('shake-animation');
        });
    }

function createGrid() {

    content.innerHTML = ''

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.style.width = `calc(100%/ ${gridSize})`;
        gridSquare.style.height = `calc(100%/ ${gridSize})`;
        content.appendChild(gridSquare);
        painter(gridSquare)
        }
}   

function painter(gridSquare){
    let alpha = 0.1
    let whiteRgb = 255
    gridSquare.addEventListener("mouseover", event => {
        if (rainbowMode.checked){ 
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        gridSquare.style.backgroundColor = shaderMode.checked ? "rgba(" + r + "," + g + "," + b + "," + alpha + ")" : "rgb(" + r + "," + g + "," + b + ")";
        } else {
            if (shaderMode.checked) {
                whiteRgb -= 25; // Subtracting from whiteRgb to make color darker
                let colorValue = whiteRgb < 0 ? 0 : whiteRgb; // Ensure colorValue is within range [0, 255]
                gridSquare.style.backgroundColor = "rgba(" + colorValue + "," + colorValue + "," + colorValue + ")";
            } else {
                whiteRgb = 255; // Reset whiteRgb to maximum value
                gridSquare.style.backgroundColor = "rgb(0, 0, 0)"; // Set color to black
            }
        }
        if (shaderMode.checked && alpha < 1) {
            alpha += 0.1
        }
    });
}

container.appendChild(content);


