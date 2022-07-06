const board = document.querySelector('#board');
const SQUARES_NUMBER = 1190;
let colors = ['red', 'green', 'white', 'blue', 'yellow', 'purple']

for (let i=0; i<SQUARES_NUMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square')
   board.append(square)
   square.addEventListener('mouseover', ()=>
  setColor(square))
   square.addEventListener('mouseleave', ()=>
  removeColor(square))
};

function setColor(element){
   const color = getRandom()
   element.style.backgroundColor = color
   element.style.boxShadow = `0 0 3px ${color}`
};
function removeColor(element){
   element.style.backgroundColor = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
};
function getRandom(){
   const index = Math.floor(Math.random() *colors.length)
   return colors[index]
};