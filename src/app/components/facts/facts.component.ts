import { Component, OnInit } from '@angular/core';
import { FactService } from '../../services/fact.service';


import { FactModel } from '../../models/FactModel';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  facts: FactModel[] = [];
  constructor(private factService: FactService) { }

  ngOnInit(): void {
    this.facts = this.factService.getFacts();
  }
}
