import TimerEvent from "openfl/events/TimerEvent";
var assert = chai.assert;


describe ("TypeScript | TimerEvent", function () {
	
	
	it ("new", function () {
		
		// TODO: Confirm functionality
		
		var timerEvent = new TimerEvent (TimerEvent.TIMER);
		assert.notEqual (timerEvent, null);
		
	});
	
	
	it ("updateAfterEvent", function () {
		
		// TODO: Confirm functionality
		
		var timerEvent = new TimerEvent (TimerEvent.TIMER);
		var exists = timerEvent.updateAfterEvent;
		
		assert.notEqual (exists, null);
		
	});
	
	
});