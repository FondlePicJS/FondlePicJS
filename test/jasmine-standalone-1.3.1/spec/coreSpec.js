describe("Core FondlePic", function() {
	"use strict";
	
	var fondlePic;
	
	beforeEach(function() {
		fondlePic = new FondlePic();
	});
	
	afterEach(function() {
		fondlePic = undefined;
	});

	it("should be instantiated with default options", function() {
		expect(fondlePic._options.someOption).toBe(true);
	});

});