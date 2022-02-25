// want to create a 16 x 16 grid of square divs
const container = document.querySelector('.container');
for (let i = 0; i < 16*16; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.textContent = 'hi';
    div.classList.add('square')
    console.log(i);
}
