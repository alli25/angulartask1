import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(//{
  //providedIn: 'root'
//}
)
export class DataService {
  private goals = new BehaviorSubject<any>(['I want to travel', 'I want to go skiing']);
  goal= this.goals.asObservable(); 
  constructor() { }
  changeGoal(goal: any){
    this.goals.next(goal); 
  }
}
