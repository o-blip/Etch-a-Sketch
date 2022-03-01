function createGrid(grid = 16) {
    const container = document.querySelector('.container');
    const widthBox = Math.floor(1000/grid);
    console.log(widthBox);
    for (let i = 0; i < grid * grid; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('square');
        div.style.width = `${widthBox}px`;
        div.style.height = `${widthBox}px`;
        div.addEventListener('mouseover',() => div.classList.add('hover'));
    }
}

const button = document.querySelector('#reset');
button.addEventListener('click', () => {
    const boxes = document.querySelectorAll(".container div");
    boxes.forEach((box) => box.remove());
    let gridSize = prompt('Enter a grid size (max 100)');
    createGrid(gridSize);
})
