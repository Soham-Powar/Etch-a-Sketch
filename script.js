const container = document.querySelector('.container');
const noOfSq = document.querySelector('.noOfSq');
let n = 16;

//create nxn grid
for(let j = 0; j < n; j++) {
	const line = document.createElement('div');
	line.setAttribute("class", 'line');
	for(let i = 0; i < n; i++) {
		let div = document.createElement('div');
		div.setAttribute("class", 'block')
		line.appendChild(div);
		div.addEventListener("mouseenter", () => {
			div.style.backgroundColor = 'aquamarine';
		})
	}
	container.appendChild(line);
}

//popup how many squares on button click
noOfSq.addEventListener('click', () => {
	let squareNo = prompt("Enter number of squares per side");

})