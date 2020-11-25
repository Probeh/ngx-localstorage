export interface KeyValue<TModel> {
  // ======================================= //
  [ key: string ]: TModel;
  // ======================================= //
}
export interface IKeyValue<T> {
  // ======================================= //
  key: string;
  value: T;
  // ======================================= //
}
declare type TModel = any;