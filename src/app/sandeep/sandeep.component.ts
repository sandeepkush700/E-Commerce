import { Login } from './../data-types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandeep',
  templateUrl: './sandeep.component.html',
  styleUrls: ['./sandeep.component.css']
})
export class SandeepComponent implements OnInit {
  checkOne: number = 0;
  checkTwo: number = 0;
  checkThree: number = 0;
  checkFour: number = 0;
  checked1: boolean = false
  checked2: boolean = false
  checked3: boolean = false
  checked4: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  list = [1, 2, 3, 4];

  // check1(event: any, index: number) {
  //   console.log("---", event.target.checked);
  //   console.log("---", index);
  //   if (event.target.checked) {
  //     if (index == 0) {
  //       // this.list[index] = index + 1;
  //       this.checkOne = this.list[index]
  //       this.checked1 = true;
  //     }
  //     if (index == 1) {
  //       this.list[index] = index + 1;
  //       this.checkTwo = this.list[index];;
  //       this.checked2 = true;
  //     }
  //     if (index == 2) {
  //       this.list[index] = index + 1;
  //       this.checkThree = this.list[index];
  //       this.checked3 = true;
  //     }
  //     if (index == 3) {
  //       this.list[index] = index + 1;
  //       this.checkFour = this.list[index];
  //       this.checked4 = true;
  //     }
  //   } else {
  //     if (index == 0) {
  //       this.checked1 = false;
  //     }
  //     if (index == 1) {
  //       this.checked2 = false;
  //     }
  //     if (index == 2) {
  //       this.checked3 = false;
  //     }
  //     if (index == 3) {
  //       this.checked4 = false;
  //     }
  //   }

  // }


  // check2() {
  //   this.checked2 = !this.checked2;
  // }
  // check3() {
  //   this.checked3 = !this.checked3;
  // }
  // check4() {
  //   this.checked4 = !this.checked4;
  // }


  // deleteindex:any)
  // {
  //   console.log(index)
  //   if(index==0)
  //   {
  //     this.checked1=false
  //   }
  //   if(index==1)
  //   {
  //     this.checked2=false
  //   }
  //   if(index==2)
  //   {
  //     this.checked3=false
  //   }
  //   if(index==3)
  //   {
  //     this.checked4=false
  //   }
  // }

  checked:boolean=false
  expression:boolean=false;
  data:any[]=[];
  data1:any
  show:boolean=true
  itemData:any =[]


  check1(i: any) {
    // this.data.push({id:this.data.length})
    // this.data1=this.data[i].id
    // if(this.data[i].id==i)
    // {
    //   this.checked=!this.checked;
    //   this.expression=true;
    // }
    if(this.itemData.includes(i)){
      let indexToRemove = this.itemData.indexOf(i);
      this.itemData.splice(indexToRemove, 1);

    }
    else{
      this.itemData.push(i)
    }
    
    console.log(this.itemData)

  }

  delete()
  {
    this.expression=false
    console.log()
  }

}
