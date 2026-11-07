class Lord1 {

    hp:number=100;
    attack:number=10;
    defense:number=5;
    speed:number=30;
    dead: boolean=true;

    basicAttack(){
    return this.attack
    }

    skillArea(){
    return  `Lord mengeluarkan area effect : ${this.attack}`
    }

    skillAirbone(){
    return  `Lord mengeluarkan airbone : ${this.attack}`
    }

    walking(){
     this.speed +=2;
          return  `Lord berjalan : ${this.speed}`;
    }

    isDead():boolean{
        return (this.dead = true);
    }
    }

const lord = new Lord1();
