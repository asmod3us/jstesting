module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 8000,
					base: '.'
				}
			}
		}
	});

	grunt.registerTask('default', 'connect:server:keepalive');
};
