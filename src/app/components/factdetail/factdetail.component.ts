import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-factdetail',
  templateUrl: './factdetail.component.html',
  styleUrls: ['./factdetail.component.css']
})
export class FactdetailComponent implements OnInit {

  constructor(private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line: radix
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  backClicked(): void {
    this.location.back();
  }
}
