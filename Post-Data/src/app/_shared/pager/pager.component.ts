import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
 // pager object
  constructor() { }

  ngOnInit() {
  }

  @Input() pagerMain: any;
  @Output() pagingClicked:EventEmitter<string>=new EventEmitter<string>();

  onClick(x:number):void {
this.pagingClicked.emit(x.toString());
     }

}
