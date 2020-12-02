import { Component, OnInit } from '@angular/core';

import { FactModel } from '../../models/FactModel';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  facts: FactModel[] = [];
  constructor() { }

  ngOnInit(): void {
    this.facts = [
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
