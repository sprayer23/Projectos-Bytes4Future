class Cat {
    constructor(name, weight, maxJumpHeight) {
        this.name = name;
        this.weight = weight;
        this.maxJumpHeight = maxJumpHeight;
        this.verticalPosition = 0;
    }

    jump(power) {
        this.verticalPosition += 
            this.maxJumpHeight * power;
    }
}

const cat = new Cat('Tobias', 12, 100);
console.log(cat.verticalPosition)
    
cat.jump(.2)
console.log(cat.verticalPosition)