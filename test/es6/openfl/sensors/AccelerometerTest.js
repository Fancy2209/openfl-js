import Accelerometer from "openfl/sensors/Accelerometer";
var assert = chai.assert;


describe ("ES6 | Accelerometer", function () {
	
	
	it ("muted", function () {
		
		// TODO: Confirm functionality
		
		var accelerometer = new Accelerometer ();
		var exists = accelerometer.muted;
		
		assert.notEqual (exists, null);
		
	});
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var accelerometer = new Accelerometer ();
		assert.notEqual (accelerometer, null);
		
	});
	
	
	it ("setRequestedUpdateInterval", function () {
		
		// TODO: Confirm functionality
		
		var accelerometer = new Accelerometer ();
		var exists = accelerometer.setRequestedUpdateInterval;
		
		assert.notEqual (exists, null);
		
	});
	
	
	it ("isSupported", function () {
		
		// TODO: Confirm functionality
		
		var exists = Accelerometer.isSupported;
		
		assert.notEqual (exists, null);
		
	});
	
	
});