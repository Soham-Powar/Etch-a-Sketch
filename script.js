const container = document.querySelector('.container');
const noOfSq = document.querySelector('.noOfSq');
let squareNo = 16;

//create nxn grid
createGrid(squareNo);
function createGrid(squareNo) {
	for(let j = 0; j < squareNo; j++) {
		const line = document.createElement('div');
		line.setAttribute("class", 'line');
		for(let i = 0; i < squareNo; i++) {
			let div = document.createElement('div');
			div.setAttribute("class", 'block')
			line.appendChild(div);
			div.addEventListener("mouseenter", () => {
				div.style.backgroundColor = randomColor();
			})
		}
		container.appendChild(line);
	}
}

//clear previous grid
function clearPrevGrid() {
	container.innerHTML = '';
}

//popup how many squares on button click
noOfSq.addEventListener('click', () => {
	squareNo = prompt("Enter number of squares per side(max=100)");
	clearPrevGrid();
	if(squareNo === null) {
		squareNo = 16;
	}
	createGrid(squareNo);
})

//generate random color
function randomColor() {
	const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
	const r = randomBetween(0, 255);
	const g = randomBetween(0, 255);
	const b = randomBetween(0, 255);
	const rgb = `rgb(${r},${g},${b})`;
	return rgb;
}