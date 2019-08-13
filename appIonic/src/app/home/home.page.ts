import { Component } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  display: string = "";
  numberOne: number = 0;
  numberTwo: number = 0;
  faltResult: Boolean = false;
  operator: string;

  inputData(number: string) {

    this.display += number;
  }

  asigOperator(operator: string) {
    this.operator = operator;
    this.numberOne = parseFloat(this.display);
    this.display = "";
  }

  resultado() {
    if (this.operator != "" && this.display != "") {
      this.numberTwo = parseFloat(this.display);
      if (this.operator == "+")
        this.display = (this.numberOne + this.numberTwo).toString();
      else if (this.operator == "*")
        this.display = (this.numberOne * this.numberTwo).toString();
      else if (this.operator == "-")
        this.display = (this.numberOne - this.numberTwo).toString();
      else if (this.operator == "/")
        this.display = (this.numberOne / this.numberTwo).toString();
    }
  }

  limpiar() {
    this.display = "";
    this.operator = "";
  }

}
