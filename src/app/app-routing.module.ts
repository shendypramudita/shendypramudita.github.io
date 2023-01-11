import { NumberTwoComponent } from './pages/number-two/number-two.component';
import { NumberOneComponent } from './pages/number-one/number-one.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const appRoutes: Routes = [
  { path: '',     component:  HomeComponent },
  { path: 'number-one',  component:  NumberOneComponent},
  { path: 'number-two',  component:  NumberTwoComponent},
  { path: '**',   redirectTo: ''}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
