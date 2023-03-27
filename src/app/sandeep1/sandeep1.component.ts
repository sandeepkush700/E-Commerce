import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandeep1',
  templateUrl: './sandeep1.component.html',
  styleUrls: ['./sandeep1.component.css']
})
export class Sandeep1Component implements OnInit {
  data="hello"
  constructor() {
    console.log("hfdkhfgg")
   }

  ngOnInit(): void {
  }
  ngOnChange(change:any)
  {
    console.log("onchange callled")
  }
}
