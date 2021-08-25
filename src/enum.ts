export {};

enum Months {
  January = 1,
  Feburary,
  March,
  April,
  May,
  June,
  July,
  Augaust,
  Seputenber,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.Feburary);
console.log(Months.December);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
  //YELLOW = '#FFFF00',
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = '#0000FF',
  GRAY = '#808080',
}

COLORS.YELLOW;
