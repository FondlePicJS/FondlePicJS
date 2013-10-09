module.exports = function(grunt) {

  // Project configuration.
//  grunt.initConfig({
//    //pkg: grunt.file.readJSON('package.json'),
//    
//      
//    }
//  });

  // Load the plugin that provides the "uglify" task.
//  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
//  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', [], function() {
  	grunt.log.writeln('In task');
  });


  grunt.registerTask('runTests', [], function() {
  	grunt.log.error('Test errors');
  });


  grunt.registerTask('parent', [], function() {
  	grunt.log.writeln('In parent task');
  	  grunt.task.run('child');

  });

  grunt.registerTask('child', [], function() {
  	grunt.log.writeln('In child task');
  });
  
  
  // Jasmine Tests
  grunt.loadNpmTasks('grunt-contrib-jasmine');


//JSHint    
    grunt.loadNpmTasks('grunt-contrib-jshint');


grunt.initConfig({
  jasmine: {
    pivotal: {
      src: 'src/**/*.js',
      options: {
        specs: 'test/jasmine-standalone-1.3.1/spec/*Spec.js',
        helpers: 'test/jasmine-standalone-1.3.1/spec/*Helper.js'
      }
    }
  },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    }
});
  
};
