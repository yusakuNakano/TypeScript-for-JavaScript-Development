export {};

let fooCmpatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCmpatible);

fooCmpatible = barCompatible;

console.log(typeof fooCmpatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatiblee = barIncompatible;

let fooString: string;

let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';

fooString = fooStringLiteral;

let fooNumber: number;
let letfooNumberLiteral: 1976 = 1976;
fooNumber = letfooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'ham');
