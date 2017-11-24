module.exports = grunt => {
  require('load-grunt-tasks')(grunt)
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dist: {
        files: {
          'dist/js/injected.min.js': ['src/js/html2canvas.js', 'src/js/canvas2image.js', 'src/js/injected.js']
        }
      }
    }
  })
  grunt.registerTask('default', ['uglify'])
}
