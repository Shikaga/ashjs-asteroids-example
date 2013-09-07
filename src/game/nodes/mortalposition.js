define([
	'ash', 'game/components/mortal', 'game/components/position'
], function (Ash, Mortal, Position) {
	var MortalPosition = Ash.Node.create({
		asteroid : Mortal,
		position : Position
	});

	return MortalPosition;
});
