import render from '../render'

//DOM
const canvas = document.querySelector("#screen")
const gravityRange = document.querySelector("#gravityRange")
const volumeRange = document.querySelector("#volumeRange")
const windRange = document.querySelector("#windRange")

const rainColor = "#00CED1"

const rainDropHeight = 5
const rainDropWidth = 1

let gravity = 5
let volume = 5
let wind = 2

const updateFrequence = 10


let rainDrops = [

]

const mainRender = new render()

const loadEventListeners = () => {
	gravityRange.oninput = () => {
		gravity = parseInt(gravityRange.value)
	}
	volumeRange.oninput = () => {
		volume = parseInt(volumeRange.value)
	}
	windRange.oninput = () => {
		wind = parseInt(windRange.value)
	}
}

const updateRainDrops = () => {
	rainDrops = rainDrops.filter(function(value) {
		return value.y + gravity < canvas.height
	});

	rainDrops = rainDrops.map(function(element, index) {
		element.x += wind
		element.y += gravity
		return element
	})
	console.log(rainDrops.length)
}

const update = () => {
	for(let i = 0;i < volume; i++){
		spawnRainDrop(randint(-canvas.width / 2, canvas.width + canvas.width / 2), randint(-canvas.height / 2, canvas.height + canvas.height / 2))
	}

	if(rainDrops.length > 0){
		updateRainDrops()
		mainRender.render( rainDrops )
	}
}

const rain = () => {
	setInterval(() => {
		update()
	}, updateFrequence)
}

const spawnRainDrop = (x, y) =>{
	rainDrops.push({
		x: x,
		y: y,
		w: rainDropWidth,
		h: rainDropHeight,
		color: rainColor
	})
}

const randint = (min, max) => {
	return Math.round(Math.random() * (+max - +min) + +min)
}

loadEventListeners()

export default rain