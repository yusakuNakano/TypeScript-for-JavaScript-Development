export {};

type profile = {
  name: string;
  age?: number;
  zipCode: number;
};

type PartioalType = Partial<profile>;
type RequiredType = Required<profile>;
