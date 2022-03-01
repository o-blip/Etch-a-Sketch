function createGrid(grid = 16) {
    const container = document.querySelector('.container');
    for (let i = 0; i < grid * grid; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('square')
        div.addEventListener('mouseover',() => div.classList.add('hover'));
    }
}

const button = document.querySelector('#reset');
button.addEventListener('click', () => {
    const boxes = document.querySelectorAll(".container div");
    boxes.forEach((box) => box.classList.remove('hover'));
    let gridSize = prompt('Enter a grid size (max 100)');
    createGrid(gridSize);
})
