import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberTwoComponent } from './number-two.component';
import { FormsModule } from '@angular/forms';

const numberTwoRoutes: Route[] = [
  {
    path: '',
    component: NumberTwoComponent
  }
];

@NgModule({
  declarations: [
    NumberTwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(numberTwoRoutes),
    FormsModule
  ]
})
export class NumberTwoModule { }
