module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            main: {
                files: {
                    "less/main.css": "less/main.less",
                }
            }        
        },

        concat: {
            // 2. Настройка для объединения файлов находится тут
            dist: {
                src: [
                    'js/*.js', // Все js-файлы в папке js
                ],
                dest: 'js/build/SPA_test_copy_current.js'
            }
        },

        uglify: {
            build: {
                src: 'js/SPA_test_copy_current.js',
                dest: 'js/build/SPA_test_copy_current.min.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'less/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },

            css: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                },
            },
        }       

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-less');  

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
   
    grunt.registerTask('default', ['less', 'concat', 'uglify', 'imagemin', 'watch']);
};