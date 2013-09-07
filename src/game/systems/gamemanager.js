define([
	'ash', 'game/nodes/spaceshipcollision',
	'game/nodes/asteroidcollision', 'game/nodes/bulletcollision',
	'brejep/point'
], function (Ash, SpaceshipCollisionNode, AsteroidCollisionNode,
	BulletCollisionNode, Point) {

	var GameManager = Ash.System.extend({
		gameState: null,
		creator: null,
		spaceships: null,
		asteroids: null,
		bullets: null,

		constructor: function (gameState, creator){
			this.gameState = gameState;
			this.creator = creator;
			this._populateWithMortals();
		},

		_populateWithMortals: function() {
			for(var i=0; i < 10; i++) {
				this.creator.createMortal(0,0);
			}
		},

		addToEngine: function (game) {
			this.spaceships = game.getNodeList(SpaceshipCollisionNode);
			this.asteroids = game.getNodeList(AsteroidCollisionNode);
			this.bullets = game.getNodeList(BulletCollisionNode);
		},

		update: function (time) {
		//	this.creator.createAsteroid(30,0,0);
		},

		removeFromEngine: function (game) {
			this.spaceships = null;
			this.asteroids = null;
			this.bullets = null;
		}
	});

	return GameManager;
});
