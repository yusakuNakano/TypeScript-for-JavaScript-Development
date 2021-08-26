export {};

function double(value: number): number;
function double(value: string): string;

//シグネチャで型の制約をしているのでany型でOK
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
  //シグネチャで型制約しているのでわざわざ関数内で例外の分岐処理をする必要がない
}
console.log(double(100));
console.log(double('Go'));
// console.log(double(true));
