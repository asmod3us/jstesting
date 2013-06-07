var webdriver = require('selenium-webdriver'),
	client = new webdriver.Builder()
		.withCapabilities({'browserName': 'phantomjs'}).build(),
	chai = require('chai'),
	expect = chai.expect,
	fs = require('fs');


describe('Test google', function(){

	before(function(done) {
		client.get('http://google.com').then(function(){
			done();
		});
	});


	it('should see the correct title', function(done) {
		client.getTitle()
			.then(function(title){
				expect(title).to.equal('Google');
				return client.takeScreenshot();
   			})
			.then(function(data){
				var base64Data = data.replace(/^data:image\/png;base64,/,"");
				fs.writeFile("google.png", base64Data, 'base64', function(err) {
					if(err) {
						console.log(err);
					}
					done();
				});
			});
	});


	after(function(done) {
		client.quit().then(function(){
			done();
		});
	});

});
