class Hero {
    health: number=100
    speed: number=100
    magical: number=100
    physical: number=100
    basic: number=100
    
    getInformation(): string {
        return `darahnya ${this.health}, ${this.speed}`;
    }
    getAttacked(damage: number): number {
        this.health = this.speed - damage

        return this.health
    }

    getHealing(heal: number): number {
        this.health = this.health + heal;

        return this.health
    }
}

const hero = new Hero();

console.log(hero.getHealing(30));


