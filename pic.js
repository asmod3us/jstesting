var page = require('webpage').create();
page.viewportSize = { width: 1024, height: 768 };
page.zoomFactor = 1;

page.open('http://www.github.com/', function() {
	page.render('github.png');
	phantom.exit();
});
