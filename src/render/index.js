const canvas = document.querySelector("#screen")
const context = canvas.getContext('2d')

const skyColor = "#082b5e"

export default class render{
	draw( object ){
		try{
			context.beginPath()
			context.fillStyle = object.color
			context.fillRect(object.x, object.y, object.w, object.h)
			context.closePath()
		}catch(e){
			console.log(e)
		}
	}

	render( map ){
		this.clear()
		this.draw({
			x: 0,
			y: 0,
			w: canvas.width,
			h: canvas.height,
			color: skyColor 

		})
		map.forEach(( object ) => {
			this.draw( object )
		})
	}

	clear(){
		context.clearRect(0,0, canvas.width, canvas.height)
	}
}