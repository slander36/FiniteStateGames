
knights.weapon = function() {
	this.dmgModifier = 0;
}
knights.weapon.prototype.setDamageModifier = function(newMod) {
	this.dmgModifier = newMod;
}
knights.weapon.prototype.getDamageModifier = function() {
	return this.dmgModifier;
}
