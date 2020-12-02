import { Injectable } from '@angular/core';
import { FactModel } from '../models/FactModel';

@Injectable({
  providedIn: 'root'
})
export class FactService {

  constructor() { }

  getFacts(): FactModel[] {
    return [
      {
        id: 1,
        title: 'Steak is delicious',
      },
      {
        id: 2,
        title: 'Fries are delicious',
      },
      {
        id: 3,
        title: 'Salad is delicious',
      },
    ];
  }
}
