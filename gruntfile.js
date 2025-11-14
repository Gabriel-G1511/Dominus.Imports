module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    'dist/css/main.css': 'src/main.less'
                }
            }
        },

        cssmin: {
            target: {
                files: {
                    'dist/css/main.min.css': ['dist/css/main.css']
                }
            }
        },

        copy: {
            main: {
                files: [
                    { expand: true, cwd: './', src: ['index.html'], dest: 'dist/' },
                    { expand: true, cwd: 'src/', src: ['img/**'], dest: 'dist/' }
                ]
            }
        },

        mkdir: {
            all: {
                options: {
                    create: ['dist', 'dist/css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');

    grunt.registerTask('default', ['mkdir', 'less', 'cssmin', 'copy']);
    grunt.registerTask('build', ['mkdir', 'less', 'cssmin', 'copy']);
};
