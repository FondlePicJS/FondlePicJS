var FondlePic = function(element, options) {
	console.log(element);
    return new FondlePic.Instance(element, options || {});
};

FondlePic.Instance = function(elementId, options) {
	var self = this;

	this.imageFile = document.getElementById(options['imageFile']);
	this.canvasElement = document.getElementById(elementId);
	this.canvasContext = this.canvasElement.getContext('2d');
	this.canvasWidth = this.canvasElement.width;
	this.canvasHeight = this.canvasElement.height;	
	this.imageObj = new Image();
	this.base64ImageData = '';
	
	initialise = function(){
		self.touchElement = Hammer(self.canvasElement, {
	        drag: false,
	        transform: false
	    });
	
		self.touchElement.on("tap", function(event) {
		     alert("can't touch this");
		});
	};
	
	this.imageFile.onchange = function(event) {
		var reader = new FileReader(),
			file = self.imageFile.files[0];
	
		reader.onload = function(event) {
			self.base64ImageData = event.target.result;
			self.imageObj.src = self.base64ImageData;
		}
		reader.readAsDataURL(file);
	};
	
	this.imageObj.onload = function() {
		paintCanvas();
	}
	
	paintCanvas = function(){
		console.log(self.imageObj.src);
		self.canvasContext.drawImage(self.imageObj, 0 , 0, 300, 500);
	};
	
	initialise();
};