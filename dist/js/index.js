"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 16;
console.log(typeof teste(x));
function teste(x) {
    return x;
}
const user = {
    name: "pedro",
    age: 17
};
console.log(user.name);
var Size;
(function (Size) {
    Size["p"] = "Pequena";
    Size["m"] = "Medio";
    Size["g"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Gola V",
    tamanho: Size.g
};
console.log(camisa);
function sayHelloTo(name) {
    return `Ola ${name}`;
}
console.log(sayHelloTo('Adelson'));
function logger(msg) {
    console.log(msg);
}
logger('C#');
class Knight {
    constructor(Name, Life) {
        this.Class = "Cavaleiro";
        this.Name = Name;
        this.Life = Life;
    }
    showChar() {
        return `Dados do ${this.Class} \nNome: ${this.Name}\nClass: ${this.Class}\nLife: ${this.Life}`;
    }
}
class KnightMage extends Knight {
    constructor(Name, Life, Element) {
        super(Name, Life);
        this.Class = "Cavaleiro Mago";
        this.Element = Element;
    }
    showKnightMage() {
        console.log(`${this.showChar()}\nElemento:${this.Element}`);
    }
}
const Nikar = new KnightMage("Nikar", 10, "Fogo");
Nikar.showKnightMage();
//Decoration
function BaseParametrs() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = (Math.random() * 100000).toFixed(0);
                this.createAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParametrs()
], Person);
const sam = new Person('sam');
console.log(sam);
