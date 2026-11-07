class Enemy2 {

//
    hp: number=100;
    attack: number=5;
    defense: number=5;
    speed: number=5;
    dead: boolean=true;

    //method
    attacking() :number {
        return this.attack
    }

    walking() :number {
        return this.attack
    }

    isDead():boolean{
        return (this.dead = true);
    }

}