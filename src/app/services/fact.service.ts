import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { FactModel } from '../models/FactModel';
import { RequestModel } from '../models/RequestModel';

@Injectable({
  providedIn: 'root'
})

export class FactService {
  factsUrl = 'https://catfact.ninja/facts?limit=3&max_length=1000';

  constructor(private http: HttpClient) { }

  getFacts(): Observable<RequestModel> {
    return this.http.get<RequestModel>(this.factsUrl);
  }
}
