/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'meta': {
      version: '0.1.0',
      banner: '/*! Cardr.org - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://rollingjubilee.org/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Cardr.org; Licensed MIT */'
    },
    'less': {
      production: {
        options: {
          yuicompress: true
        },
        files: {
          'views/assets/css/cardr.min.css': ['views/assets/css/reset.css', 'views/assets/css/bootstrap.css', 'views/assets/css/cardr.less']
        }
      }
    },
    // 'minify': {
    //   'dist': {
    //     'src': ['<banner:meta.banner>', 'views/assets/js/jquery.min.js', 'views/assets/js/cardr.js'],
    //     'dest': 'views/assets/js/cardr.min.js'
    //   }
    // },
    'rev': {
      assets: {
        files: [
          'views/index.html'
        ]
      }
    },
    'watch': {
      files: ['views/assets/css/cardr.less', 'views/assets/js/cardr.js', 'grunt.js'],
      tasks: 'less min'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-min');
  // grunt.loadNpmTasks('grunt-contrib-rev');
  grunt.loadNpmTasks('grunt-assets-revving');

  // Default task.
  grunt.registerTask('default', ['less', 'rev']);

};
