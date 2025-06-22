export type NoNullUndefined<T> = {
  [P in keyof T]: NoNullUndefined<NonNullable<T[P]>>;
};
