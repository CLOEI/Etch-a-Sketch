const root = document.documentElement;
const black = document.querySelector('.black-color');
const rainbow = document.querySelector('.rainbow-color');
const gridSize = document.querySelector('.grid-sizer');
const deleteGrid = document.querySelector('.delete');
const gridContainer = document.querySelector('.grid-container');

// GLobal var
let currentGridSize;
let currentColor = 'black';


window.addEventListener('load', e => {
    generateGrids();
})
black.addEventListener('click', e => {
    currentColor = 'black';
})
rainbow.addEventListener('click', e => {
    currentColor = 'rainbow';
})

// Options
gridSize.addEventListener('click', e => {
    let size = prompt('Wanted size : ');
    if(!isNaN(size) && size <= 100 && size != '' && size != null){
        currentGridSize = size;
        deleteChild();
        generateGrids(size);
    }else if(size > 100){
        alert('Number too big');
    }else{
        alert('Not a number / Empty');
    }
})
deleteGrid.addEventListener('click', e => {
    deleteChild();
    generateGrids(currentGridSize);
})

// Functions
const colorBlack = (e) => {
    e.target.style.backgroundColor = 'black';
}
const colorRainbow = (e) => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 200);
    const blue = Math.floor(Math.random() * 150);
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
const deleteChild = () => {
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}
const generateGrids = (size = 16) => {
    root.style.setProperty('--grid', size);
    deleteChild();
    for(var x = 0; x < size*size; x++){
        let div = document.createElement('div');
        div.classList.add('grid');
        if(currentColor == 'black') {
            div.addEventListener('mouseenter', colorBlack);
        }else{
            div.addEventListener('mouseenter', colorRainbow);
        }
        gridContainer.appendChild(div);
    }
}