var FondlePic = function(canvasId, imageFileId, options) {
    return new FondlePic.Instance(canvasId, imageFileId, options || {});
};

FondlePic.Instance = function(canvasId, imageFileId, options) {
	var self = this;
	
	// Elements
	this.imageFile = document.getElementById(imageFileId);
	this.canvasElement = document.getElementById(canvasId);
	this.zoomInButton = document.getElementById(options['zoomInButton']);
	this.zoomOutButton = document.getElementById(options['zoomOutButton']);
	this.rotateLeftButton = document.getElementById(options['rotateLeftButton']);
	this.rotateRightButton = document.getElementById(options['rotateRightButton']);
					
	this.canvasContext = this.canvasElement.getContext('2d');

	//Variable initialisation
	this.imageObj = new Image();
	this.base64ImageData = '';
	this.zoomLevel = 1;
	this.zoomLevel = 1;	
	this.rotationValue = 0;
	
	//Constants
	var DEGREE_TO_RADIAN = (Math.PI/180),
	_90_DEGREES = (Math.PI/2),
	_360_DEGREES = (Math.PI*2),
	CANVAS_WIDTH = this.canvasElement.width,
	CANVAS_HEIGHT = this.canvasElement.height;
	
	initialise = function(){
		self.touchElement = Hammer(self.canvasElement, {
	        drag: false,
	        transform: false
	    });
	
		self.touchElement.on("tap", function(event) {
		     alert("can't touch this");
		});
	};

	//Image Render
	this.imageFile.onchange = function(event) {
		var reader = new FileReader(),
			file = self.imageFile.files[0];
	
		reader.onload = function(event) {
			self.base64ImageData = event.target.result;
			self.imageObj.src = self.base64ImageData;
		}
		reader.readAsDataURL(file);
	};	
	this.imageObj.onload = function() { paintCanvas(self.canvasContext); };

	//User actions
	this.zoomInButton.onclick = function(){ self.zoomLevel += 0.1; paintCanvas(self.canvasContext); };
	this.zoomOutButton.onclick = function(){ self.zoomLevel -= 0.1; paintCanvas(self.canvasContext); };	
	this.rotateRightButton.onclick = function(){ self.rotationValue = getNormalisedAngle(self.rotationValue) + (_90_DEGREES - (getNormalisedAngle(self.rotationValue) % _90_DEGREES));; paintCanvas(self.canvasContext); };	
	this.rotateLeftButton.onclick = function(){ 
		var angleDifferenceTo90 = getNormalisedAngle(self.rotationValue) % _90_DEGREES;
		var angleToBeDeducted = angleDifferenceTo90;
		if(angleToBeDeducted === 0){
			angleToBeDeducted = _90_DEGREES;
		};
		self.rotationValue = getNormalisedAngle(self.rotationValue) - angleToBeDeducted;
		paintCanvas(self.canvasContext); 
	};


	//Canvas painting
	paintCanvas = function(currentContext){
		var imageWidth = CANVAS_WIDTH * self.zoomLevel;
		var imageHeight = CANVAS_HEIGHT * self.zoomLevel;

		clearCanvas();
		//rotate, draw image, rotate back
		currentContext.save();
		
		currentContext.setTransform(1, 0, 0, 1, 0, 0);
		currentContext.translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 0);
		currentContext.rotate(self.rotationValue);
		currentContext.translate(-CANVAS_WIDTH / 2, -CANVAS_HEIGHT / 2, 0);
		
		currentContext.drawImage(self.imageObj, 0 , 0, imageWidth, imageHeight);
		currentContext.restore();
	};
	
	//Helpers
	clearCanvas = function(){
		self.canvasContext.canvas.width = CANVAS_WIDTH;
	}
			
	getNormalisedAngle = function(angle){
		return angle%(_360_DEGREES);
	};
	
	initialise();
};