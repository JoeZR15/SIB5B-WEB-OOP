class NPC {

    name: string;
    health: number;
    speed: number;
    defense: number;
    attack: number;
    npctype: "walk"|"fly";

    constructor(name: string, health: number, speed: number, defense: number, attack: number, npctype: "walk"|"fly") {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.defense = defense;
        this.attack = attack;
        this.npctype = npctype;
    }


    walking() :string {
        this.speed +=2;
          return  `npc jalan. kecepatan : ${this.speed}`;
    }

    attacking() {
        this.attack +=2;
          return  `npc nyerang. kekuatan : ${this.attack}`
    }

    sprint() {
        this.speed +=4;
        return  `npc sprint. kecepatan : ${this.speed}`
    }
    
    ultimateskill() {
        this.attack +=10;
         return    `npc combo. kekuatan : ${this.attack}`
    }

    isflying() {
        if (this.npctype === "fly") 
            {
            this.speed += 10
            this.attack += 5
            return `mantap`
        }
        return `jelek`
    }
}
    const harpy = new NPC ("harpy" ,10, 20, 30, 20, "walk");
    const juan = new NPC ("juan" ,10, 20, 30, 20, "fly");


    
    console.log(juan.isflying());
