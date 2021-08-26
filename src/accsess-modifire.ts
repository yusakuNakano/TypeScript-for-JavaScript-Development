export {};

class Person {
  public name: string;
  protected age: number;
  // private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name:${this.name}, age:${this.age}`;
  }
}

class Andriod extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name:${this.name}, age:${this.age},nationality: ${this.nationality}`;
  }
}

let taro = new Person('taro', 30, 'Japan');
let ba = new Andriod('ba', 256, 'dokka');
console.log(taro.profile());
console.log(ba.profile());
console.log(taro.name);
// console.log(taro.age);
// let hanako = new Person();
