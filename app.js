let canvasColor = 'pink';
let brushColor = 'purple';
let pausing = false;
let erasing = false;
/* const colorMap = {'2022': '#6667AB', '2021': } */

const container = document.querySelector('#container');
container.classList.add('colFlex');

// canvas
const canvas = document.createElement('div');
container.appendChild(canvas);
canvas.id = 'canvas';
canvas.classList.add('colFlex');
canvas.style.margin = '20px';

for (let i = 0; i < 32; i++) {
    const theRow = document.createElement('div');
    canvas.appendChild(theRow);
    theRow.classList.add("row");
    for (let j = 0; j < 32; j++) {
        const theBox = document.createElement('div');
        theRow.appendChild(theBox);
        theBox.classList.add("box");
        theBox.style.backgroundColor = canvasColor;
        theBox.addEventListener('mouseover', coloring);
    }
}

// buttons
const buttons = document.createElement('div');
container.appendChild(buttons);
buttons.id = 'buttons';
buttons.classList.add('rowFlex');
buttons.style.gap = '20px';

const resetButton = document.createElement('button');
buttons.appendChild(resetButton);
resetButton.textContent = 'reset (r)';
resetButton.style.color = brushColor;
resetButton.style.backgroundColor = canvasColor;
resetButton.addEventListener('click', () => {
    reset();
})

const pauseButton = document.createElement('button');
buttons.appendChild(pauseButton);
pauseButton.textContent = 'pause (p)';
pauseButton.style.color = brushColor;
pauseButton.style.backgroundColor = canvasColor;
pauseButton.addEventListener('click', () => {
    reversePause();
})

const eraseButton = document.createElement('button');
buttons.appendChild(eraseButton);
eraseButton.textContent = 'erase (e)';
eraseButton.style.color = brushColor;
eraseButton.style.backgroundColor = canvasColor;
eraseButton.addEventListener('click', () => {
    reverseErase();
})

// shortcuts
document.addEventListener('keypress', (event) => {
    if (event.key == 'r') {
        reset();
    } else if (event.key == 'p') {
        reversePause();
    } else if (event.key == 'e') {
        reverseErase();
    }
})

// functions
function coloring(event) {
    if (!pausing) {
        if (!erasing) {
            event.target.style.backgroundColor = brushColor;
            event.target.classList.add('selected');
        } else {
            event.target.style.backgroundColor = canvasColor;
            event.target.classList.remove('selected');
        }
    }
}

function reset() {
    const yes = prompt("Enter yes to reset");
    if (yes == "yes") {
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(x => {
            x.classList.remove('selected');
            x.style.backgroundColor = canvasColor;
        })
        console.log("Reset");
    }
}

function reversePause() {
    pausing = !pausing;
    if (pausing) {
        pauseButton.textContent = "!pause (p)";
        pauseButton.style.backgroundColor = brushColor;
        pauseButton.style.color = canvasColor;
    } else {
        pauseButton.textContent = "pause (p)";
        pauseButton.style.backgroundColor = canvasColor;
        pauseButton.style.color = brushColor;
    }
}

function reverseErase() {
    erasing = !erasing;
    if (erasing) {
        eraseButton.textContent = "!erase (e)";
        eraseButton.style.backgroundColor = brushColor;
        eraseButton.style.color = canvasColor;
    } else {
        eraseButton.textContent = "erase (e)";
        eraseButton.style.backgroundColor = canvasColor;
        eraseButton.style.color = brushColor;
    }
}

function setCanvasColor(newColor) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(x => {
        if (!x.classList.contains('selected')) {
            x.style.backgroundColor = newColor;
        }
    })
    console.log("Change the canvas color to " + newColor);
    canvasColor = newColor;
    resetButton.style.backgroundColor = canvasColor;
    if (!pausing) {
        pauseButton.style.backgroundColor = canvasColor;
    } else {
        pauseButton.style.color = canvasColor;
    }
    if (!erasing) {
        eraseButton.style.backgroundColor = canvasColor;
    } else {
        eraseButton.style.color = canvasColor;
    }
}

function setBrushColor(newColor) {
    console.log("Change the brush color to " + newColor);
    brushColor = newColor;
    resetButton.style.color = brushColor;
    if (!pausing) {
        pauseButton.style.color = brushColor;
    } else {
        pauseButton.style.backgroundColor = brushColor;
    }
    if (!erasing) {
        eraseButton.style.color = brushColor;
    } else {
        eraseButton.style.backgroundColor = brushColor;
    }
}