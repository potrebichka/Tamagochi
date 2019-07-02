import { takeAction, status } from './main.js';

export class Creature {
  constructor(){
    this.food = 30;
    this.play = 30;
    this.energy = 30;
    this.toilet = 30;
    this.love = 30;
    this.sick = false;
    this.dirty = false;
    this.sad = false;
    this.criticalCondition = false;
    this.heDead = false;
    this.gone = false;
    this.dirtyCounter = 0;
  }

  reduceStats(){
    let interval = setInterval(() => {
      takeAction();
      if(this.sick === true){
        this.food -= 2;
        this.play -= 2;
        this.energy -= 2;
        this.toilet -= 2;
        this.love -= 2;
        if(this.criticalCondition === true){
          this.energy += 7;
        }
      } else {
        this.food--;
        this.play--;
        this.energy--;
        this.toilet--;
        this.love--;
        if(this.criticalCondition  === true){
          this.energy += 6;
        }
      }
      if (this.food < 0) {
        this.food = 0;
      }
      if (this.play < 0) {
        this.play = 0;
      }
      if (this.energy < 0) {
        this.energy = 0;
      }
      if (this.toilet < 0) {
        this.toilet = 0;
      }
      if (this.love < 0) {
        this.love = 0;
      }
      this.checkStatus();
      if (this.dirty === true) {
        this.dirtyCounter++;
      }
      if (this.dirtyCounter >= 4) {
        this.dirty = false;
        this.dirtyCounter = 0;
      }
      status();
      if(this.heDead){
        clearInterval(interval);
      }
    }, 1000);
  }

  feed(){
    if(this.food <= 25){
      this.food += 5;
    } else {
      this.food = 30;
    }
    this.checkStatus();
  }
  play(){
    if(this.play <= 25){
      this.play += 5;
    } else {
      this.play = 30;
    }
    this.checkStatus();
  }
  rest(){
    if(this.energy <= 25){
      this.energy += 5;
    } else {
      this.energy = 30;
    }
    this.checkStatus();
  }
  bathroom(){
    if(this.toilet <= 25){
      this.toilet += 5;
    } else {
      this.toilet = 30;
    }
    this.checkStatus();
  }
  love(){
    if(this.love <= 25){
      this.love += 5;
    } else {
      this.love = 30;
    }
    this.checkStatus();
  }
  clean(){
    this.dirtyCounter += 0.5;
    this.checkStatus();
  }

  checkStatus(){
    if((this.food + this.play + this.energy + this.toilet + this.love) < 100){
      this.sick = true;
    } else {
      this.sick = false;
    }

    if(this.toilet === 0) {
      this.dirty = true;
      this.toilet = 30;
    }

    if(this.play === 0) {
      this.sad = true;
    } else {
      this.sad = false;
    }

    if(this.energy === 0){
      this.criticalCondition = true;
    } else if (this.criticalCondition === true && this.energy === 25) {
      this.criticalCondition = false;
    }

    if(this.food === 0){
      takeAction();
      this.heDead = true;
    }

    if(this.love === 0){
      this.gone = true;
    }
  }
}
