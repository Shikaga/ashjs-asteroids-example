define([
	'ash', 'game/nodes/uievent'
], function (Ash, UIEventNode) {
	var UIEventSystem = Ash.System.extend({
		creator: null,
		spaceships: null,
		asteroids: null,
		bullets: null,

		constructor: function (creator) {
			this.creator = creator;
			return this;
		},

		addToEngine: function (game) {
			this.uievents = game.getNodeList(UIEventNode);
		},

		removeFromEngine: function (game) {
			this.uievents = null;
		},

		update: function (time) {
			for (var uievent = this.uievents.head; uievent; uievent = uievent.next) {
				if (uievent.ui.ui.clicked === true) {
					this.creator.destroyEntity(uievent.entity);
				}
			}
		}
	});

	return UIEventSystem;
});
