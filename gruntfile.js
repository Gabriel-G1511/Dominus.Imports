module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    "dist/css/main.css": "src/main.less"
                }
            }
        },

        cssmin: {
            target: {
                files: {
                    "dist/css/main.min.css": ["dist/css/main.css"]
                }
            }
        },

        watch: {
            styles: {
                files: ["src/**/*.less"],
                tasks: ["less", "cssmin"],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["less", "cssmin"]);
};
