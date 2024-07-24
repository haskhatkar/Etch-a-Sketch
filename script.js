let rowAmount;
let columnAmount;
let defaultAmount;
let currentOpac;
let inputSize;

function defaultGrid() {
    defaultAmount = 8;
    rowAmount = defaultAmount;
    columnAmount = defaultAmount;
}

function createGrid(rowAmount, columnAmount) {
    for (let i = 0; i < rowAmount; i++) {
        for (let j = 0; j < columnAmount; j++) {
            const container = document.querySelector('.container');
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            container.appendChild(gridSquare);
        }
    }
}

function randomColor() {
    const hoverGrid = document.querySelectorAll('.gridSquare');
    hoverGrid.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            const rgbAmount = 256;
            var red = Math.floor(Math.random() * rgbAmount);
            var green = Math.floor(Math.random() * rgbAmount);
            var blue = Math.floor(Math.random() * rgbAmount);
        var randomColor = "rgb(" + red + "," + green +"," + blue +")";
        grid.style.backgroundColor = randomColor;
        });
    });
}

function changeOpacity() {
    currentOpac = 0;
    const gridOpac = document.querySelectorAll('.gridSquare');
    gridOpac.forEach((opac) => {
        opac.addEventListener("mouseover", () => {
            const opacIncrement = 0.1;
            currentOpac = opac.style.opacity;
            currentOpac = Number(currentOpac);
            if (currentOpac < 1) {
                opac.style.opacity = currentOpac + opacIncrement;
            }
        })
    })
}


function hoverOnGrid() {
    randomColor();
    changeOpacity();
}

function removeGrid() {
    const container = document.querySelector('.container');
    const gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach((grid) => {
        container.removeChild(grid);
    });
}

function deleteButton() {
    const resetButton = document.querySelector('#resetBtn');
    resetButton.addEventListener("click", () => {
        removeGrid();
        createGrid(rowAmount, columnAmount);
        decideBasis(inputSize, defaultAmount);
        hoverOnGrid();
    })
}

function setSize() {
    const sizeBtn = document.querySelector("#sizeBtn");
    sizeBtn.addEventListener("click", () => {
        do {
            inputSize = prompt("Enter number between 1-100");
        }
        while(inputSize >= 100 || inputSize <= 0);

        inputSize = Number(inputSize);
        rowAmount = inputSize;
        columnAmount = inputSize;
        removeGrid();
        createGrid(rowAmount, columnAmount);
        decideBasis(inputSize, defaultAmount);
        hoverOnGrid();
    })
};

function setBasis(inputSize) {
    const setBasis = document.querySelectorAll('.gridSquare');
    setBasis.forEach((basis) => {
        basis.style.flexBasis = inputSize + 'px';
    });
}

function decideBasis(inputSize, defaultAmount) {
    const cssBasis = 60;
    inputSize = (defaultAmount / inputSize) * cssBasis;
    setBasis(inputSize);
}



defaultGrid();
createGrid(rowAmount, columnAmount);
hoverOnGrid();
setSize();
deleteButton();
