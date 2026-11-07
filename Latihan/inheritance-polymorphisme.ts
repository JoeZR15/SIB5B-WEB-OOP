//Parent Class
class PublicEnemy {
hp: number;
attack: number;
defense: number;
speed: number;

//constructor
constructor (hp: number, attack: number, defense: number, speed: number) {
    this.hp=hp;
    this.attack=attack;
    this.defense=defense;
    this.speed=speed;
    }

    basicAttack() :number {
        return (this.attack)
    }
}

//Chill Class
class Lord extends PublicEnemy {
constructor() {
    super(100, 100, 100, 100);
    }

    //method
    basicAttack() :number {
        return (this.attack = 30);
    }
}

class Turtle extends PublicEnemy {

    //method-inheritance //polymorphism ketika method dipanggil sama tapi isinya diedit
   basicAttack() :number {
        return (this.attack = 70);
    } 
}

class RedDragon extends PublicEnemy{}

class BlueWolf extends PublicEnemy{}