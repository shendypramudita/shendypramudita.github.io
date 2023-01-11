import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./../../app.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _router:Router,
  ){}

  onClickNumberOne(){
    //this._router.navigate(['/number-one']);
    this._router.navigateByUrl('/number-one');
  }

  onClickNumberTwo(){
    //this._router.navigate(['/number-two']);
    this._router.navigateByUrl('/number-two');
  }

  ngOnInit(): void {
  }

}
