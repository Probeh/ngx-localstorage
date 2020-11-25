import { Guid } from 'guid-ts';

export interface IModelBase {
  // ======================================= //
  uid?: string;
  name?: string;
  description?: string;
  isactive?: boolean;
  isdefault?: boolean;
  // ======================================= //
}
export class ModelBase<T>  {
  // ======================================= //
  private readonly _uid: string;
  private readonly _created: number;
  // ======================================= //
  private _description: string;
  private _isactive: boolean;
  private _isdefault: boolean;
  private _name: string;
  // ======================================= //
  constructor(options?: IModelBase) {
    // ======================================= //
    this._created = new Date().valueOf();
    this._uid = Guid.newGuid().toString().split('-')[ 0 ];
    // ======================================= //
    this._name = options?.name;
    this._description = options?.description;
    this._isactive = options?.isactive;
    this._isdefault = options?.isdefault;
    // ======================================= //
  }
  // ======================================= //
  public get name(): string { return this._name; }
  public get created(): number { return this._created; }
  public get uid(): string { return this._uid; }
  public get isdefault(): boolean { return this._isdefault; }
  public get isactive(): boolean { return this._isactive; }
  public get description(): string { return this._description; }
  // ======================================= //
  public set name(update: string) {
    this._name = update;
  }
  public set isdefault(update: boolean) {
    this._isdefault = update;
  }
  public set isactive(update: boolean) {
    this._isactive = update;
  }
  public set description(update: string) {
    this._description = update;
  }
}