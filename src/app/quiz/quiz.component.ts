import { Component, OnInit } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  isLoading = false;
  questions:   [];
  private questionsSub: Subscription;

  isTimeUp = false;
  
  answer = new Array(10).fill("0");
  correctAnswer = new Array(10).fill(0);

  marks = 0;

  constructor() { }

  ngOnInit(): void {
    this.isLoading = true;
  }

  onSubmit(){
    console.log("submitted")
  }

}
