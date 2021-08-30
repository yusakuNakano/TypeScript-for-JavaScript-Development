export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

//Excluede あるtypeから関数を除外する
type FunctionType = Exclude<SomeTypes, string | number>;

type NunFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

//Extract
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractiongFunction = Extract<SomeTypes, Function>;

//Nonnullable
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
