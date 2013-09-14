define(['ash'], function (Ash) {
	var UI = Ash.Class.extend({
		constructor: function (ui) {
			this.ui = ui;
		}
	});

	UI.prototype.destroy = function() {
		this.ui.destroy();
	}

	return UI;
});
