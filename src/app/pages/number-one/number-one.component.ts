import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-one',
  templateUrl: './number-one.component.html',
  styleUrls: ['./../../app.component.scss']
})
export class NumberOneComponent implements OnInit {

  vowels=['a','e','i','o','u'];
  vowelsChar='---';
  consonanChar='---';

  constructor() { }

  ngOnInit() {
  }

  getVowels(value:String){
    let str_input= value.toLowerCase();
    const str_array=str_input.replace(/[^a-zA-Z]/g, '').split('');
    const vowels=str_array.filter( a => this.vowels.includes(a.toLowerCase()));

    return vowels.join(" ");
  }

  getConsonants(value:String){
    let str_input= value.toLowerCase();
    const str_array=str_input.replace(/[^a-zA-Z]/g, '').split('');
    const consonant=str_array.filter( a => !this.vowels.includes(a.toLowerCase()));

    return consonant.join(" ");
  }

  onKeyUp(x:any) { // appending the updated value to the variable
    this.vowelsChar  = this.getVowels(x.target.value);
    this.consonanChar = this.getConsonants(x.target.value);
  }
}
