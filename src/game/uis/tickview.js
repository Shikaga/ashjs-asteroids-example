define([
	'brejep/tickprovider'],
	function(TickProvider) {
	function TickView( overlay ) {
		this.initialise( overlay );
	}
	var api = TickView.prototype;
	api.overlay = null;
	api.tickProvider = null;
	api.initialise = function(overlay) {
		this.overlay = overlay;

		this.stats = new Stats();
		this.stats.setMode(0); // 0: fps, 1: ms

		// Align top-left
		this.stats.domElement.style.position = 'absolute';
		this.stats.domElement.style.left = '0px';
		this.stats.domElement.style.top = '0px';

		this.tickProvider = new TickProvider(this.stats);
		this.draw();
		return this;
	};
	api.draw = function() {
		this.overlay.appendChild( this.stats.domElement );
	};

	return TickView;
});
