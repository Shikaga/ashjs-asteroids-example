define(['ash'], function (Ash) {
	var UIEvent = Ash.Class.extend({
		constructor: function () {
			this.clicked = false;
		}
	});

	return UIEvent;
});
