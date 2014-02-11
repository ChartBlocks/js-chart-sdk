module.exports = function(grunt) {


    var banner = '/*! <%= pkg.name %> \n\
 * Copyright (c) 2013 ChartBlocks \n\
 * Licensed under the MIT license.\n\
 * <%= grunt.template.today("yyyy-mm-dd") %> */\n\
(function(window, document){\n';
    var footer = '})(window, document);';


    var src = ['src/chart.js', 'src/core.js'];

// Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: banner,
                footer: footer
            },
            build: {
                src: src,
                dest: 'chart.min.js'
            }
        },
        concat: {
            options: {
                banner: banner,
                footer: footer
            },
            build: {
                src: src,
                dest: 'chart.js'
            }
        },
        watch: {
            uglify: {
                files: ['src/*.js'],
                tasks: ['jshint', 'uglify'],
                options: {
                    spawn: false
                }
            },
            concat: {
                files: ['src/*.js'],
                tasks: ['jshint', 'concat'],
                options: {
                    spawn: false
                }
            }
        },
        jshint: {
            all: ['src/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify', 'concat']);
};