export {};

let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1967 };

let profile2: {
  name: string;
  birthYear: number;
} = { name: 'Ham', birthYear: 1976 };
// profile2 = { birthYear: 1976 };
