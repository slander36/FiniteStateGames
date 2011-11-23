
knights.actor = function() {
	this.class = null;
	this.weapon = null;
	this.life = 100;
};

knights.actor.prototype.setWeapon = function(newWeapon) {
	this.weapon = newWeapon;
}
knights.actor.prototype.getWeapon = function() {
	return this.weapon;
}
knights.actor.prototype.getLife = function() {
	return this.life;
}
knights.actor.prototype.takeDamage = function(damage) {
	this.life = this.life - damage;
	if(this.life < 0) {
		this.life = 0;
		if(this.class == 'enemy') {
			document.getElementById('game').innerHTML = "You Win!<br/>Game Over.";
		} else {
			document.getElementById('game').innerHTML = "You Lose.<br/>Game Over.";
		}
	}
}
knights.actor.prototype.doDamage = function() {
	damage = Math.random() * 10;
	if(this.weapon) {
		damage += this.weapon.getDamageModifier();
	}
	return damage;
}
