export {};

type pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  batterAverage: number;
};

const DaimajinSasaki: pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  batterAverage: 0.367,
};

type twoWayPlayer = pitcher1 & Batter1;

const OotaniShouhei: twoWayPlayer = {
  throwingSpeed: 165,
  batterAverage: 0.286,
};

// type twoWayPlayer = {
//   throwingSpeed: number;
//   batterAverage: number;
// };
