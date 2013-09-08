require([
	'brejep/fillsnfixes',
	'brejep/keypoll',
	'game/asteroids',
	'Stats'
], function(Fixes, KeyPoll, Asteroids, Stats) {
		'use strict';

		function AsteroidsApp() {
			var CANVAS_WIDTH = 800,
				CANVAS_HEIGHT = 300;

			// Game initialisation
			this.initialise = function() {
				// some polyfills and additions to base javascript classes
				Fixes.initialise();

				var canvasElem = createCanvas();
				var gamewrapper = document.getElementById('game-wrapper');
				gamewrapper.appendChild(canvasElem);

				// init keyboard poll
				KeyPoll.initialise(window);

				var asteroids = new Asteroids(gamewrapper, canvasElem);
				asteroids.start();
			};

			function createCanvas() {
				var canvasElem = document.createElement('canvas');
				canvasElem.setAttribute('id', 'game_stage');
				canvasElem.setAttribute('width', CANVAS_WIDTH);
				canvasElem.setAttribute('height', CANVAS_HEIGHT);
				canvasElem.style.backgroundColor = '#000';
				return canvasElem;
			}
		}

		// start!
		new AsteroidsApp().initialise();
	}
);
