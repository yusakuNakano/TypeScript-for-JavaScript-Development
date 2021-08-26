export {};

class VisaCard {
  //readonlyでpublicの要素も含むが明示的に書くほうが良い
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('ハムさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
