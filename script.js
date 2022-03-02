createGrid(); // create initial grid
addHover(); // create initial hover effect

// reset grid and create new grid
const button = document.querySelector('#reset');
button.addEventListener('click', () => {
    let gridSize = prompt('Enter a grid size (max 100)');
    console.log(gridSize);
    createGrid(gridSize);
    addHover();
})

//
function addHover() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            // need to skip filled squares, and darken them instead of replace the color with
            // another random color. <if background-color not empty => darken shade, 
            //                          else background-color = randomColor>
            if (square.style.backgroundColor === '') {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                square.style.backgroundColor = '#' + randomColor;

            }
        });
    });

}





function createGrid(grid = 16) {
    if (isNaN(grid)) {
        grid = 16;
    }
    const boxes = document.querySelectorAll(".container div");
    boxes.forEach((box) => box.remove());
    const container = document.querySelector('.container');
    const widthBox = 1000 / grid; // problem with decimal pixels maybe?
    for (let i = 0; i < grid * grid; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('square');
        div.style.width = `${widthBox}px`;
        div.style.height = `${widthBox}px`;
    }
}

