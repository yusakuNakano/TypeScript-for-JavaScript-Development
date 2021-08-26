export {};
//tsconfig.jsonのstrictNullChecksをfalseにすることでどんな変数にもnullが代入することができるようになる
//null許容の型を実現したいときはunion型(|)を使用する
let profile: { name: string; age: number | null } = {
  name: 'Ham',
  age: null,
};
