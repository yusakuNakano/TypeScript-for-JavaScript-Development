export {};

//typeは戦闘大文字
type Mojiretsu = string;
type Plofile = {
  name: string;
  age: number;
};

const fooMojiretsu: Mojiretsu = 'Hello';
const fooString: string = 'Hello';

const example1: Plofile = {
  name: 'Ham',
  age: 43,
};

type Plofile2 = typeof example1;
