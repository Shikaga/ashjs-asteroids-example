define([
	'ash',
	'game/components/asteroid',
	'game/components/spaceship',
	'game/components/mortal',
	'game/components/bullet',
	'game/components/position',
	'game/components/motion',
	'game/components/motioncontrols',
	'game/components/gun',
	'game/components/guncontrols',
	'game/components/display',
	'game/components/ui',
	'game/components/uievent',
	'game/graphics/mortalview',
	'game/uis/tickview',
	'game/uis/dialogview',
	'brejep/tickprovider',
	'brejep/keyboard'
], function (
	Ash,
	Asteroid,
	Spaceship,
	Mortal,
	Bullet,
	Position,
	Motion,
	MotionControls,
	Gun,
	GunControls,
	Display,
	UI,
	UIEvent,
	MortalView,
	TickView,
	DialogView,
	TickProvider,
	Keyboard
) {

	var EntityCreator = Ash.Class.extend({
		game: null,
		graphics: null,

		constructor: function (game, overlay, graphics) {
			this.game = game;
			this.overlay = overlay;
			this.graphics = graphics;
		},

		destroyEntity: function(entity) {
			this.game.removeEntity(entity);
		},

		createAsteroid: function(radius, x, y) {
			var asteroid = new Ash.Entity()
				.add(new Asteroid())
				.add(new Position(x, y, 0, radius))
				.add(new Motion(
						(Math.random() - 0.5) * 4 * (50 - radius),
						(Math.random() - 0.5) * 4 * (50 - radius),
						Math.random() * 2 - 1,
						0)
				)
				.add(new Display(new AsteroidView(radius, this.graphics)));
			this.game.addEntity(asteroid);
			return asteroid;
		},

		createSpaceship: function() {
			var spaceship = new Ash.Entity()
				.add(new Spaceship())
				.add(new Position(400, 300, 1, 6))
				.add(new Motion(0, 0, 0, 15))
				.add(new MotionControls(Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, 100, 3))
				.add(new Gun(8, 0, 0.3, 2))
				.add(new GunControls(Keyboard.Z))
				.add(new Display(new SpaceshipView(this.graphics)));
			this.game.addEntity(spaceship);
			return spaceship;
		},

		createMortal: function(x, y) {
			var mortal = new Ash.Entity()
				.add(new Mortal())
				.add(new Position(x, y, 1, 6))
				.add(new Motion(
					(Math.random() - 0.5) * 4 * (50 - 30),
					(Math.random() - 0.5) * 4 * (50 - 30),
					Math.random() * 2 - 1,
					0)
				)
				.add(new Display(new MortalView(5, this.graphics)));
			this.game.addEntity(mortal);
			return mortal;
		},

		createUserBullet: function(gun, parentPosition) {
			var cos = Math.cos(parentPosition.rotation);
			var sin = Math.sin(parentPosition.rotation);
			var bullet = new Ash.Entity()
				.add(new Bullet(gun.bulletLifetime))
				.add(new Position(
					cos * gun.offsetFromParent.x - sin * gun.offsetFromParent.y + parentPosition.position.x,
					sin * gun.offsetFromParent.x + cos * gun.offsetFromParent.y + parentPosition.position.y, 0, 0))
				.add(new Motion(cos * 150, sin * 150, 0, 0))
				.add(new Display(new BulletView(this.graphics)));
			this.game.addEntity(bullet);
			return bullet;
		},

		createTickProvider: function() {
			var tickView = new TickView(this.overlay);
			var tickProvider = new Ash.Entity()
				.add(new TickProvider())
				.add(new Position(0,0))
				.add(new UI(tickView));
			this.game.addEntity(tickProvider);

			return tickView.tickProvider;
		},

		createDialog: function() {
			var dialogView = new DialogView(this.overlay);
			var dialogProvider = new Ash.Entity()
				.add(new UIEvent())
				.add(new Position(0,0))
				.add(new UI(dialogView));
			this.game.addEntity(dialogProvider);

			return null;
		}
	});

	return EntityCreator;
});
