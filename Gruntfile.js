module.exports = function(grunt) {

	grunt.registerTask("default", ["jasmine", "jshint"]);
	
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-jasmine");

	grunt.initConfig({
		jasmine : {
			pivotal : {
				src : "src/**/*.js",
				options : {
					specs : "test/jasmine-standalone-1.3.1/spec/*Spec.js",
					helpers : "test/jasmine-standalone-1.3.1/spec/*Helper.js"
				}
			},
			coverage : {
				src : ["src/js/**/*.js"],
				excludes: ["test/**/*.js"],
				options : {
					specs : "test/jasmine-standalone-1.3.1/spec/*.js",
					template : require("grunt-template-jasmine-istanbul"),
					templateOptions : {
						coverage : "build/coverage/coverage.json",
						report : [ {
							type : "html",
							options : {
								dir : "build/coverage/html"
							}
						}, {
							type : "cobertura",
							options : {
								dir : "build/coverage/cobertura"
							}
						}, {
							type : "text-summary"
						} ]
					}
				}
			}
		},
		jshint : {
			files : [ "Gruntfile.js", "src/**/*.js", "test/jasmine-standalone-1.3.1/spec/**/*.js" ],
			options : {
				ignores : ["test/jasmine-standalone-1.3.1/lib/**/*.js"],
				globals : {
					jQuery : true,
					console : true,
					module : true,
					document : true
				}
			}
		}

	});

};
