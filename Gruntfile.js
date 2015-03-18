module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					'src/jquery.linkScroll.js'
				],
				dest: 'jquery.linkScroll.min.js',
			}
		},

		uglify: {
			dist: {
				files: {
					'jquery.linkScroll.min.js' : [
						'jquery.linkScroll.min.js'
					]
				}
			}
		},

		jshint: {
			all: [
				'Gruntfile.js',
				'src/*.js'
			],
			options: {
				curly: false,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true,
				jquery: true,

				globals: {
					module: true,
					require: true,
					jQuery: true,
					console: true,
					define: true
				}
			}
		},

		watch: {
			concat: {
				files: [
					'src/*.js'
				],
				tasks: [
					'jshint',
					'concat',
					'uglify'
				]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'concat',
		'uglify'
	]);

};