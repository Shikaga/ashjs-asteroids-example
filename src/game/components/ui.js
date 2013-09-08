define(['ash'], function (Ash) {
	var UI = Ash.Class.extend({
		constructor: function (ui) {
			this.graphic = ui;
		}
	});

	return UI;
});
