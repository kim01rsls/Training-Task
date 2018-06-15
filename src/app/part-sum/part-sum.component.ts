import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-sum',
  templateUrl: './part-sum.component.html',
  styleUrls: ['./part-sum.component.css']
})
export class PartSumComponent implements OnInit {
  result : boolean = false;
  hidden : boolean = false;
  inputNum : '';
  numFind : number;
  inputArr : number[];

  constructor() { }

  ngOnInit() {
  }

  splitInput() {
    this.inputArr = (this.inputNum.split(' ').map(Number)).sort(function(a, b){return a-b});;
  }

  check(){
    this.hidden = true;
    let firstIndex = 0;
    let lastIndex = this.inputArr.length-1;
    
    while(this.inputArr.length != 1) {
      let numFirst = this.inputArr[firstIndex];
      let numLast = this.inputArr[lastIndex];
      let numDiff = numFirst + numLast;

      if(lastIndex == firstIndex){
        this.result = false;
        break;
      }
      else if(numDiff == this.numFind){
        this.result = true;
        break;
      }
      else if(this.numFind > numDiff) {
        firstIndex += 1;
      }
      else if(numLast >= numDiff){
        lastIndex -= 1;
      }
      else if(numDiff != this.numFind){
          lastIndex -= 1;
      }
    }
  }
}
