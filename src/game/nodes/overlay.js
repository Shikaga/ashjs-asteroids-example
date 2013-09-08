define([
	'ash', 'game/components/position', 'game/components/ui'
], function (Ash, Position, UI) {
	var Overlay = Ash.Node.create({
		position : Position,
		display : UI
	});

	return Overlay;
});
