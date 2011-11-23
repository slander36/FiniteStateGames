
knights.player = function() {
	var player = new knights.actor();
	player.class = 'player';
	player.setWeapon(knights.sword());
	return player;
}

//knights.player = new knights.actor();

//knights.player.class = 'player';

//knights.player.setWeapon(knights.sword);
