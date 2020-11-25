import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { KeyValue } from '../interfaces/IKeyValue';
import { ModelBase } from '../models/model.base';

@Injectable({ providedIn: 'root' })
export class NgxStorageService {
  // ======================================= //
  private readonly collection: KeyValue<Model> = {};
  private readonly observable: KeyValue<Subject<Model>> = {};
  // ======================================= //
  constructor() {

  }
  // ======================================= //
  public getStorage<T extends ModelBase<T>>(key: string): Promise<T[]> {
    return Promise.resolve().then<T[]>(async () => {

      const values: KeyValue<T> = JSON.parse(localStorage.getItem(key));
      this.collection[ key ] = values
        ? Object.keys(values)
          .map(item => item[ key ])
        : new Array<T>();

      return this.collection[ key ].slice() as T[];
    });
  }
  public updateStorage<T extends ModelBase<T>>(key: string, values: T[]): Promise<T[]> {
    return Promise.resolve().then<T[]>(async () => {

      const storage: T[] = await this.getStorage(key);
      values.forEach(current => {
        const index = storage.findIndex(item => item?.uid == current?.uid || item?.name == current.name);
        index > -1 ? storage.splice(index, 1, current) : storage.push(current);
      });
      this.getObservable(key)
        .next(await this.setStorage(key, storage.filter(value => value)));

      return storage.filter(value => value) as T[];
    });
  }
  public getObservable<T extends ModelBase<T>>(key: string): Subject<T[]> {
    if (!this.observable[ key ])
      this.observable[ key ] = new Subject<T[]>();

    return this.observable[ key ] as Subject<T[]>;
  }
  private setStorage<T extends ModelBase<T>>(key: string, values?: T[]): Promise<T[]> {
    return Promise.resolve().then<T[]>(async () => {

      const storage: KeyValue<T> = {};
      values.forEach(item => storage[ item.name ] = item);
      localStorage.setItem(key, JSON.stringify(storage));

      return await this.getStorage<T>(key) as T[];
    });
  }
  // ======================================= //
  private serialize(raw_data: any): string {
    return atob(JSON.stringify(raw_data));
  }
  private deserialize(serialized_data: string) {
    return JSON.parse(btoa(serialized_data));
  }
}

declare type Model = ModelBase<object>[];