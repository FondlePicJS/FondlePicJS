var FondlePic = function(element, options) {
	console.log(element);
    return new FondlePic.Instance(element, options || {});
};

FondlePic.Instance = function(element, options) {
	var self = this;
	this.canvasElement = element;
	
	initialise = function(){
		self.touchElement = Hammer(self.canvasElement, {
	        drag: false,
	        transform: false
	    });
	
		self.touchElement.on("tap", function(event) {
		     alert("can't touch this");
		});
	};
	
	initialise();
};