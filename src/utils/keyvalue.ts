import { IKeyValue } from '../interfaces/IKeyValue';

export class KeyValue<T> implements IKeyValue<T> {
  private _key: string;
  private _value: T;
  // ======================================= //
  public get key(): string { return this._key; };
  public get value(): T { return this._value; };
  public set key(key: string) { this._key = key; };
  public set value(value: T) { this._value = value; };
  // ======================================= //
  constructor(key: string, value: T) {
    this.key = key;
    this.value = value;
  }
  // ======================================= //

}