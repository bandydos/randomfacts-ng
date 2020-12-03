import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { FactModel } from '../models/FactModel';

@Injectable({
  providedIn: 'root'
})

export class FactService {
  factsUrl = 'https://catfact.ninja/facts?limit=3&max_length=1000';
  //factsUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getFacts(): Observable<FactModel[]> {
    return this.http.get<FactModel[]>(this.factsUrl);
  }
}
