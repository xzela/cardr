/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! Cardr.org - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://rollingjubilee.org/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Cardr.org; Licensed MIT */'
    },
    less: {
      production: {
        options: {
          yuicompress: true
        },
        files: {
          'assets/css/cardr.min.css': ['assets/css/reset.css', 'assets/css/bootstrap.css', 'assets/css/cardr.less']
        }
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', 'assets/js/jquery.min.js', 'assets/js/cardr.js'],
        dest: 'assets/js/cardr.min.js'
      }
    },
    rev: {
      assets: {
        files: [
          'index.php'
        ]
      }
    },
    watch: {
      files: ['assets/css/cardr.less', 'assets/js/cardr.js', 'grunt.js'],
      tasks: 'less min'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-assets-revving');

  // Default task.
  grunt.registerTask('default', 'less min rev');

};
