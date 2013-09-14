define([],
	function() {
		function DialogView( overlay, message) {
			this.initialise( overlay, message);
		}
		var api = DialogView.prototype;
		api.clicked = false;
		api.overlay = null;
		api.tickProvider = null;
		api.domElement = null;
		api.initialise = function(overlay, message) {
			this.overlay = overlay;
			this.domElement = document.createElement("button");
			this.domElement.innerHTML = message;
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
		api.destroy = function() {
			//TODO: Will this work and not leak memory?
			this.domElement.parentNode.removeChild(this.domElement);
			delete this.domElement;
		};

		return DialogView;
});
