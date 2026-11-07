class Mario {

    hp: number =1;
    speed: number =5;
    positionX: number =0;
    positionY: number =0;
    invicible: boolean =false;
    currentForm: "mario"|"SuperMario"|"FireMario" = "mario";

    bergerakKanan() {
        this.positionX += this.speed
    return `mario bergerak ke kanan sebanyak ${this.positionX} block`
    }

    bergerakKiri() {
        this.positionX -= this.speed
    return `mario bergerak ke kiri sebanyak ${this.positionX} block` 
    }

    diserang() {
    if (this.invicible == true) {
        return "Mario sedang kebal, serangan tidak berpengaruh";
    } 
    else {
        this.hp -= 1;
        this.currentForm = "mario";
    return `HP berkurang menjadi ${this.hp}`;
    }
}

    superMushroom() {
        this.hp = this.hp += 1
        this.currentForm="SuperMario"
    return `hp bertambah ${this.hp} dan mario menjadi ${this.currentForm}`
    }

    fireFlower() {
        this.hp = this.hp += 1
        this.currentForm="FireMario"
    return `hp bertambah ${this.hp} dan mario menjadi ${this.currentForm} dan bisa nembak api`
    }

    superStar() {
    this.invicible = true
        return `Mario kebal terhadap serangan`
    }
}

class superMario extends Mario {

    superStar() {
    this.invicible = true
        return `Super mario kebal terhadap serangan`
    }
    
    diserang() {
    if (this.invicible == true) {
        return "Mario sedang kebal, serangan tidak berpengaruh";
    } 
    else {
        this.hp = this.hp =- 1
        this.currentForm = "mario"
    return `hp berkurang ${this.hp}, dan super mario menjadi ${this.currentForm}`
    }
}
}

class fireMario extends Mario {

    superStar() {
    this.invicible = true
        return `FIre mario kebal terhadap serangan`
    }

    diserang() {
    if (this.invicible == true) {
        return "Mario sedang kebal, serangan tidak berpengaruh";
    } 
    else {
        this.hp = this.hp -= 1
        this.currentForm = "mario"
    return `hp berkurang ${this.hp}, dan fire mario menjadi ${this.currentForm} serta tidak menebakan bola api`
    }
}
}


const mario = new Mario ()
const supermario = new superMario ()
const firemario = new fireMario ()
console.log(mario.bergerakKanan())
