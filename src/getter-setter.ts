export {};

//*owner
//*所有者
//*途中で変更できない
//*参照できる

//secretNumber
//個人番号
//初期化時に設定できる
//途中で変更できる
//参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner(): string {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('ハムさん', 123456789);
// card.owner = 'ham';
console.log(card.owner);
// card._secretNumber;
console.log(card.debugPrint());
card.secretNumber = 987654321;
console.log(card.debugPrint());

console.log(card.secretNumber);
