// https://www.pantone.com/articles/past-colors-of-the-year
const colorMap = {2022: '#6667AB', 2021: '#939597', 2020: '#0f4c81',
2019: '#ff6f61', 2018: '#5f4b8b', 2017: '#88b04b', 2016: '#f7caca',
2015: '#955251', 2014: '#ad5e99'}

let canvasColor = colorMap[2016];
let brushColor = colorMap[2018];
let pausing = false;
let erasing = false;

const container = document.querySelector('#container');
container.classList.add('colFlex');

// canvas
const canvas = document.createElement('div');
container.appendChild(canvas);
canvas.id = 'canvas';
canvas.classList.add('colFlex');

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

// colors
const colors = document.createElement('div');
container.appendChild(colors);
colors.id = 'colors';
colors.classList.add('colFlex');
colors.style.marginTop = 0;

const canvasPicker = document.createElement('div');
colors.appendChild(canvasPicker);
canvasPicker.id = 'canvasPicker'
canvasPicker.classList.add('colorPicker');

const brushPicker = document.createElement('div');
colors.appendChild(brushPicker);
brushPicker.id = 'brushPicker'
brushPicker.classList.add('colorPicker');
brushPicker.style.marginLeft = "10%";


const canvasText = document.createElement('div');
canvasPicker.appendChild(canvasText);
canvasText.id = "canvasText";
canvasText.textContent = "canvas";
canvasText.style.lineHeight = "25px";

const brushText = document.createElement('div');
brushText.id = "brushText";
brushText.textContent = "brush";
brushText.style.lineHeight = "25px";
brushPicker.appendChild(brushText);


const colorYears = Object.keys(colorMap);
colorYears.forEach(year => {
    theBox = document.createElement('div');
    theBox.classList.add('colorBox');
    theColor = colorMap[year];
    theBox.style.backgroundColor = theColor;
    theBox.style.color = 'white';
    theBox.textContent = year;
    const theBoxCopy = theBox.cloneNode(true);

    canvasPicker.appendChild(theBox);
    brushPicker.appendChild(theBoxCopy);
    theBox.classList.add('canvasBox');
    theBoxCopy.classList.add('brushBox');
    

    if (theColor == canvasColor) {
        theBox.style.color = theColor;
        theBox.classList.add('selected');
    }

    theBox.addEventListener('click', (event) => {
        const theHex = colorMap[event.target.textContent];

        const canvasBoxes = document.querySelectorAll('.canvasBox');
        canvasBoxes.forEach(x => {
            if (x.classList.contains('selected')) {
                x.classList.remove('selected');
                x.style.color = 'white';
            }
            if (x == event.target) {
                x.classList.add('selected');
                x.style.color = theHex;
            }
        })
        setCanvasColor(theHex);
    })

    if (theColor == brushColor) {
        theBoxCopy.style.color = theColor;
        theBoxCopy.classList.add('selected');
    }

    theBoxCopy.addEventListener('click', (event) => {
        const theHex = colorMap[event.target.textContent];

        const brushBoxes = document.querySelectorAll('.brushBox');
        brushBoxes.forEach(x => {
            if (x.classList.contains('selected')) {
                x.classList.remove('selected');
                x.style.color = 'white';
            }
            if (x == event.target) {
                x.classList.add('selected');
                x.style.color = theHex;
            }
        })
        setBrushColor(theHex);
    })
})



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
    console.log("Change the canvas color to " + newColor);

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(x => {
        if (!x.classList.contains('selected')) {
            x.style.backgroundColor = newColor;
        }
    })

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