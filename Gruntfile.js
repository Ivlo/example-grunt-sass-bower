module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
              dist: {
                files: {
                  'assets/css/style.css' : 'assets/scss/style.scss'
                }
              }
            },
        watch: {
          css: {
            files: '**/*.scss',
            tasks: ['sass']
          }
        },
        bower: {
            install: {
                options: {
                    targetDir: 'javascript/dependencies',
                    layout: 'byComponent',
                    install: true,
                    verbose: true,
                    cleanBowerDir: true
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.registerTask('default',['watch']);
};