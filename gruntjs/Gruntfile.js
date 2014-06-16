/*!
 * The fun begins here :)
 */
 
module.exports = function(grunt) {

	//Initializing the configuration object
	grunt.initConfig({
		
		/*!
		 * Paths variables
		 * -------------------------------------------------------------------
		 */
		paths: {
		
			// Development where put LESS files, etc
			assets: {
				css: './assets/css/',
				less: './assets/less/',
				js: './assets/js/',
				vendor: './assets/vendor/',
				plugins: './assets/plugins/'
			},
			
			// Production where Grunt output the files      
			tmp: 'compiled/',
			css: '../public/assets/css/',
			js: '../public/assets/js/',
			laravel: '../backend/',
		  
		},
		// -------------------------------------------------------------------
		
		/*!
		 * Doing Concat
		 * -------------------------------------------------------------------
		 */
		concat: {
		
			options: {
				separator: ';',
			},
			
			// jquery and bootraps JS
			core: {
				src: [
				  '<%= paths.assets.vendor %>jquery/dist/jquery.js',
				  '<%= paths.assets.vendor %>bootstrap/dist/js/bootstrap.js',
				],
				dest: '<%= paths.tmp %>core.js',
			},
			
			// other jQuery Plugins
			plugins: {
				src: [
				  '<%= paths.assets.plugins %>**/*.js',
				],
				dest: '<%= paths.tmp %>plugins.js',
			},
			
			// the frontend js
			apps: {
				src: [
				  '<%= paths.assets.js %>*.js',
				],
				dest: '<%= paths.tmp %>apps.js',
			},
			
		},
		// -------------------------------------------------------------------
		
		/*!
		 * Compiling Less
		 * -------------------------------------------------------------------
		 */
		less: {
			
			// still in development, dont compress this
			development: {
				options: {
				  compress: false, 
				},
				files: {
				  //compiling frontend.less into frontend.css
				  "<%= paths.tmp %>less.css":"<%= paths.assets.less %>*.less",
				}
			},
			
//			// Production we minify the css output
//			production: {
//				options: {
//				  compress: true,
//				},
//				files: {
//				  //compiling frontend.less into frontend.min.css
//				  "<%= paths.css %>base.min.css":"<%= paths.tmp %>base.less",
//				  //compiling backend.less into backend.min.css
//				  "<%= paths.css %>style.min.css":"<%= paths.tmp %>style.less"
//				}
//			}
			
		},  
		// -------------------------------------------------------------------
		
		/*!
		 * Compiling Css
		 * -------------------------------------------------------------------
		 */
		concat_css: {
			
			plugins: {
				src: ["<%= paths.assets.plugins %>**/*.css"],
				dest: "<%= paths.tmp %>plugins.css"
			},
			// vendor/bootstrap/dist/css/bootstrap.min.css
			// <%= paths.assets.vendor %>bootstrap/dist/
			// <%= paths.assets.css %>bootstrap.min.css
			css: {
				src: [	"<%= paths.assets.css %>bootstrap.min.css",
				      	"<%= paths.assets.css %>style.css",
				      	"<%= paths.assets.css %>themes.css"],
				dest: "<%= paths.tmp %>core.css"
			}, 
			
			pack: {
				src: ["<%= paths.tmp %>*.css"],
				dest: "<%= paths.css %>style.css"
			}
			
		},
		// -------------------------------------------------------------------
		
		/*!
		 * Minify Css
		 * -------------------------------------------------------------------
		 */
		cssmin: {
			minify: {
				options: {
					keepSpecialComments: 0
				},
				expand: true,
				cwd: '<%= paths.css %>',
				src: [ 'style.css' ],
				dest: '<%= paths.css %>',
				ext: '.min.css'
			}
		},
		// -------------------------------------------------------------------
		
		/*!
		 * Minify the JS
		 * -------------------------------------------------------------------
		 */
		uglify: {
			
			options: {
				mangle: true  // set false if you want the names of your functions and variables unchanged
			},
			
			apps: {
				files: {
					'<%= paths.js %>apps.min.js': '<%= paths.tmp %>apps.js',
					'<%= paths.js %>plugins.min.js': '<%= paths.tmp %>plugins.js',
					'<%= paths.js %>core.min.js': '<%= paths.tmp %>core.js',
				}
			}
		},  
		// -------------------------------------------------------------------
		
		/*!
		 * Do PHP unit test
		 * -------------------------------------------------------------------
		 */
		phpunit: {
		    classes: {
				dir: '<%= paths.laravel %>app/tests/'   //location of the tests
			},
			options: {
				bin: '<%= paths.laravel %>vendor/bin/phpunit',
				colors: true
			}
		},  
		// -------------------------------------------------------------------
		
		/*!
		 * Watch the changes
		 * -------------------------------------------------------------------
		 */
		watch: {
			
			// wathing js
			js: {
				files: [
					'<%= paths.assets.vendor %>jquery/dist/jquery.js',
					'<%= paths.assets.vendor %>bootstrap/dist/js/bootstrap.js',
					'<%= paths.assets.plugins %>**/*.js',
					'<%= paths.assets.js %>*.js'
				],
				tasks: [ 'concat', 'uglify' ],
			},
			
			css: {
				files: [
				    '<%= paths.assets.less %>*.less',
				    '<%= paths.assets.plugins %>**/*.css',
				    '<%= paths.assets.css %>*.css',
				    
				],
				tasks: [ 'less', 'concat_css', 'cssmin' ],
			}
			
		},  
		// -------------------------------------------------------------------
	
	
	});

	// Plugin loading
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-phpunit');
	grunt.loadNpmTasks('grunt-jsbeautifier');


	// Task definition
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('init', ['concat', 'uglify', 'less', 'concat_css', 'cssmin']);
 
};