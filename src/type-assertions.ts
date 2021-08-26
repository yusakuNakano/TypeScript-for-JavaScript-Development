export {};

let name: any = 'Ham';
//<string>は推奨されていない asを使用すべき
let length = (<string>name).length;
// length = 'foo';
