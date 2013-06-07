"use strict";

var wd = require("wd"),
	should = require("should"),
	appURL = "http://appium.s3.amazonaws.com/WebViewApp6.0.app.zip";

// Instantiate a new browser sessoin
var browser = wd.promiseRemote("localhost", 4723);

// See whats going on
browser.on('status', function(info) {
	console.log('\x1b[36m%s\x1b[0m', info);
});

browser.on('command', function(meth, path, data) {
	console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path, data || '');
});

// Run the test
browser
	.init({
		device: 'iPhone Simulator',
		name: "Appium Hybrid App: with WD",
		platform:'Mac 10.8',
		app: appURL,
		version: '',
		browserName: ''
	})
	.then(function() {
		return browser.windowHandles();
	})
	.then(function(handles) {
		handles.length.should.be.above(0);
		return browser.window(handles[0]);
	})
	.then(function(){
		return browser.elementById('i_am_an_id');
	})
	.then(function(el) {
		return el.text();
	})
	.then(function(text) {
		text.should.eql("I am a div");
		return browser.execute("mobile: leaveWebView");
	})
	.fin(function () {
		browser.quit();
	})
	.done();