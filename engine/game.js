
knights.game = function() {
	var game = {};
	game.name = "Knights";
	game.getName = function() {
		return this.name;
	}
	game.player = knights.player();
	game.enemy = knights.enemy();
	game.update = function() {
		var gameScreen = document.getElementById('game');
		gameScreen.innerHTML = "<div id='player'></div><div id='enemy'></div>";
		var playerScreen = document.getElementById('player');
		var enemyScreen = document.getElementById('enemy');
		this.enemy.takeDamage(this.player.doDamage());
		this.player.takeDamage(this.enemy.doDamage());
		playerScreen.innerHTML = "Player (+" + this.player.getWeapon().getDamageModifier() + "): " +this.player.getLife();
		enemyScreen.innerHTML = "Enemy: " + this.enemy.getLife();
	}
	return game;
}
