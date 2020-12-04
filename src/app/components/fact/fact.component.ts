import { Component, OnInit, Input} from '@angular/core';
import { FactModel } from 'src/app/models/FactModel';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {
  @Input() fact: string;
  @Input() length: number;
  @Input() listindex: number;

  constructor() { }

  ngOnInit(): void {
  }

}
