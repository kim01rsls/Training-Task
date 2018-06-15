import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-number',
  templateUrl: './magic-number.component.html',
  styleUrls: ['./magic-number.component.css']
})

export class MagicNumberComponent implements OnInit {
  lifebar : boolean = true;
  result : boolean = false;
  lesser : boolean = false;
  greater : boolean = false;
  btnShow : boolean = true;
  error: boolean = false;
  noLife : boolean = false;
  numberGuess : number;

  numOld = Math.floor(Math.random() * (100 - 0 + 1) + 0);
  life = 5;
  constructor() { }

  ngOnInit() {
    console.log(this.numOld);
  }

  check(){
    let numCount = this.life;
      if (this.numberGuess){
        this.error = false;
        
        if(this.life == 0){
          this.zeroLife();
        }
        else{
          if (this.numberGuess > this.numOld){
            this.life --;
            this.greaterThan();
          }
          else if (this.numberGuess < this.numOld){
            this.life --;
            this.lesserThan();
          }
          else if (this.numberGuess == this.numOld){
            this.result = true;
            this.resultFinish();
          }
        }
    }
    else {
      this.error = true;
    }
  }

  private zeroLife() {
    this.noLife = true;
    this.btnShow = false;
    this.greater = false;
    this.lesser = false;
    this.life = 0;
  }

  private greaterThan() {
    this.greater = true;
    this.lesser = false;
  }

  private lesserThan() {
    this.lesser = true;
    this.greater = false;
  }

  private resultFinish() {
    this.lifebar = false;
    this.btnShow = false;
    this.lesser = false;
    this.greater = false;
  }
}
