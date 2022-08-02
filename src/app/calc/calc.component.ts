import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  dynamicResult = "0.0";
  firstOperation = null;
  secondOperation = null;
  firstOperationClicked = false;


  public getNumericInput(){
    //
  }


  constructor() { }

  ngOnInit(): void {
  }

}
