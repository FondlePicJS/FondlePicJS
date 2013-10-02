module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

//,
//    uglify: {
//      options: {
//        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//      },
//      build: {
//        src: 'src/<%= pkg.name %>.js',
//        dest: 'build/<%= pkg.name %>.min.js'
//      }
//    }
  });

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

grunt.initConfig({
  jasmine: {
    pivotal: {
      src: 'src/**/*.js',
      options: {
        specs: 'test/jasmine-standalone-1.3.1/spec/*Spec.js',
        helpers: 'test/jasmine-standalone-1.3.1/spec/*Helper.js'
      }
    }
  }
});
  
};
