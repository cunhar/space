function Enemy() {
    this.health = 0;
    this.shoot = false;
    this.shotDamage = 0;
    this.imgSrc = "";
    this.radius = "";
    this.height = 0;
    this.width = 0;
    this.x = 0;
    this.y = 0;
}

Enemy.prototype.looseHealth = function (val) {
    this.health -= val;
    
}

Enemy.prototype.shoot = function (val) {
    //shoot
}
