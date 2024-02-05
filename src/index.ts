let x:number = 10;

x = 16;

console.log(typeof teste(x));

function teste(x:number) {
    return x;
}

const user: {name:string, age:number} = {
    name: "pedro",
    age: 17
}

console.log(user.name);

enum Size {
    p = "Pequena",
    m = "Medio",
    g = "Grande"
}

const camisa = {
    name: "Camisa Gola V",
    tamanho: Size.g
}

console.log(camisa);

function sayHelloTo(name: string): string {
    return `Ola ${name}`;
}

console.log(sayHelloTo('Adelson'));

function logger(msg:string): void {
    console.log(msg);
}

logger('C#');

interface IPlayer {
    Name: string;
    Class: string;
    Life: number;
    showChar(): void;
}

class Knight implements IPlayer {
    Name;
    Class = "Cavaleiro";
    Life;

    constructor(Name:string , Life: number){
        this.Name = Name;
        this.Life = Life;
    }

    showChar(): string {
        return `Dados do ${this.Class} \nNome: ${this.Name}\nClass: ${this.Class}\nLife: ${this.Life}`;
    }
}

class KnightMage extends Knight {
    Element;
    Class = "Cavaleiro Mago";

    constructor(Name:string, Life:number, Element:string) {
        super(Name,Life);
        this.Element = Element;
    }

    showKnightMage(): void {
       console.log(`${this.showChar()}\nElemento:${this.Element}`);
    }
}

const Nikar = new KnightMage("Nikar",10,"Fogo");

Nikar.showKnightMage();

//Decoration
function BaseParametrs(){
    return function<T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = (Math.random()*100000).toFixed(0);
            createAt = new Date();
        }
    }
}

@BaseParametrs()
class Person {
    name

    constructor(name: string){
        this.name = name;
    }
}

const sam = new Person('sam');

console.log(sam);
