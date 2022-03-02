createGrid(); // create initial grid
addHover(); // create initial hover effect

// reset grid and create new grid
const button = document.querySelector('#reset');
button.addEventListener('click', () => {
    let gridSize = prompt('Enter an integer grid size (max 100)');
    createGrid(gridSize);
    addHover();
})


function addHover() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            if (square.style.backgroundColor === '') {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                console.log(randomColor);
                square.style.backgroundColor = '#' + randomColor;
            } else if (square.style.opacity > 0) {
                // background of grid is black, so increasing opacity will
                // create a shade of the color
                square.style.opacity -= .1;
            } else {
                // once opacity reaches 0, i.e. square is black, will get a new color
                square.style.opacity = 1;
                square.style.backgroundColor = '';
            }
        });
    });
}

function createGrid(grid = 16) {
    if (isNaN(grid)) {
        // in case user enters not a number
        grid = 16;
    }
    grid = Math.floor(grid); // in case not an integer

    const boxes = document.querySelectorAll(".square");
    boxes.forEach((box) => box.remove());
    const container = document.querySelector('.container');
    const widthBox = 960 / grid; // problem with decimal pixels maybe?
    for (let i = 0; i < grid * grid; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('square');
        div.style.width = `${widthBox}px`;
        div.style.height = `${widthBox}px`;
        div.style.opacity = '1';
    }
}

