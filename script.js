const container = document.querySelector('.container');


//create 16x16 grid
for(let i = 0; i < 16 * 16; i++) {
	let div = document.createElement('div');
	div.setAttribute("class", 'block')
	container.appendChild(div);
}


