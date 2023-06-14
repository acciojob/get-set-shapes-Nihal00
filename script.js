//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	getWidth(){
		return this.width;
	}

	getHeight(){
		return this.height
	}

	getArea(){
		console.log(this.width * this.height);
	}
}

class Square extends Animal {
	getPerimeter(){
		console.log((this.width + this.height) + (this.width + this.height));
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
