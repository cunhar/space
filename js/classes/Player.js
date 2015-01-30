function Player() {
    this.health = 0;
    this.lives = 0;
    this.shoot = false;
    this.shotDamage = 0;
    this.imgSrc = "";
    this.radius = "";
    this.height = 0;
    this.width = 0;
    this.lastShot = new Date();
    this.fullHealth = 100;
}

Player.prototype.looseHealth = function (val) {
    this.health -= val;
    if (this.health <= 0) {
        if (this.lives > 0) {
            this.health = 100;
            this.lives -= 1; 
        }
        else {
            //game over proc
        }
    }
}

Playet.prototype.shoot = function (val) {
    //shoot
}
