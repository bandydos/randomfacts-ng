import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-factdetail',
  templateUrl: './factdetail.component.html',
  styleUrls: ['./factdetail.component.css']
})
export class FactdetailComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  backClicked(): void {
    this.location.back();
  }
}
