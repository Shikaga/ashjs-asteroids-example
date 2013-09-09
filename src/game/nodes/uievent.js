define([
	'ash', 'game/components/ui', 'game/components/uievent'
], function (Ash, UI, UIEvent) {
	var UIEvent = Ash.Node.create({
		ui : UI,
		uiEvent : UIEvent
	});

	return UIEvent;
});
