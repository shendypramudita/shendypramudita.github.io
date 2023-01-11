import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-two',
  templateUrl: './number-two.component.html',
  styleUrls: ['./../../app.component.scss']
})
export class NumberTwoComponent implements OnInit {

  numberFamily:any;
  memberFamily:any;
  myArray:any;
  outputValue:any;

  constructor() { }

  ngOnInit() {


  }

  onKeyUp(x:any) { // appending the updated value to the variable

    this.numberFamily = (<HTMLInputElement>document.getElementById("numberFamily")).value;
    this.memberFamily = x.target.value.split(' ');

    this.myArray = this.memberFamily.sort();
    this.myArray = this.memberFamily.reverse();

    console.log('this.myArray',this.myArray);

    if( this.myArray.length < parseInt(this.numberFamily)){
      this.outputValue = 'Input must be equal with count of family';
    }else{

      let countFamily = 0;
      let countBus = 0;
      for(const item of this.myArray){

        countFamily = countFamily + item;

        if(countFamily >= 4){
          countBus = countBus + 1;
          countFamily = 0;
        }else{

          if(item < countFamily){
            countFamily = countFamily + item;
            if(countFamily === 4){
              countBus = countBus + 1;
            }
          }else{
            countBus = countBus + 1;
          }
        }
      }

      this.outputValue = countBus;
    }

  }


  onlyNumber(event:any) {
    let charCode = event.which ? event.which : event.keyCode;
    if (charCode >= 48 && charCode <= 57) {
      // number
      return;
    } else if (charCode >= 37 && charCode <= 40) {
      // arrow
      return;
    } else if (charCode === 8 || charCode == 46) {
      return;
    } else {
      event.preventDefault();
    }
  }

}
