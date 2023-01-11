import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberOneComponent } from './number-one.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';


const numberOneRoutes: Route[] = [
  {
    path: '',
    component: NumberOneComponent
  }
];

@NgModule({
  declarations: [
    NumberOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(numberOneRoutes),
    MaterialModule,
  ]
})
export class NumberOneModule { }
