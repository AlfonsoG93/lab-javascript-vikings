// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function () {
  return this.strength;
};

Soldier.prototype.receiveDamage = function (damage) {
  this.health -= damage;
};
// Viking
function Viking (name, health, strength) {
  this.name = name;
  this.health = health;
  this.strength = strength;
}

Viking.prototype = Object.create(Soldier.prototype);

Viking.prototype.receiveDamage = function (damage) {
    this.health -= damage;
      if ( this.health > 0 ) {
      return this.name + ' has received ' + damage + ' points of damage';
    } else {
      return this.name + ' has died in act of combat';
    }
};

Viking.prototype.battleCry = function () {
  return 'Odin Owns You All!';
};


// Saxon
function Saxon (health, strength) {
    this.health = health;
    this.strength = strength;
}

Saxon.prototype = Object.create(Soldier.prototype);

Saxon.prototype.receiveDamage = function (damage) {
    this.health -= damage;
      if ( this.health > 0 ) {
      return 'A Saxon has received ' + damage + ' points of damage';
    } else {
      return 'A Saxon has died in combat';
    }
};


// War
function War () {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(Viking) {
  this.vikingArmy.push(Viking);
};

War.prototype.addSaxon = function(Saxon) {
  this.saxonArmy.push(Saxon);
};

War.prototype.vikingAttack = function () {
  var j = Math.floor( Math.random() * this.saxonArmy.length);
  var x = Math.floor( Math.random() * this.vikingArmy.length);
  //console.log(j,this.saxonArmy.length);
  this.saxonArmy[j].receiveDamage(this.vikingArmy[x].strength);
  //  if(this.saxonArmy[j].receiveDamage(this.vikingArmy[x].strength) === "A Saxon has died in combat"){
  //    this.saxonArmy.splice(j,1);
  //  }
};
