define([],
	function() {
		function DialogView( overlay ) {
			this.initialise( overlay );
		}
		var api = DialogView.prototype;
		api.clicked = false;
		api.overlay = null;
		api.tickProvider = null;
		api.domElement = null;
		api.initialise = function(overlay) {
			this.overlay = overlay;
			this.domElement = document.createElement("button");
			this.domElement.innerHTML = "HELLO!";
			this.domElement.style.position = "absolute";
			this.domElement.style.left = "50px";
			this.domElement.style.top = "50px";
			this.domElement.onclick = function() {
				this.clicked = true;
			}.bind(this);
			this.draw();
			return this;
		};
		api.draw = function() {
			this.overlay.appendChild( this.domElement );
		};

		return DialogView;
});
