import { Component } from '@angular/core';
import { NgForm, FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gh-issues';
  questionForm: FormGroup;

  constructor() {
    this.questionForm = new FormGroup({
      question: new FormControl('test'),
      answers: new FormArray([
        new FormGroup({ text: new FormControl('1. answer'), value: new FormControl(false) }),
        new FormGroup({ text: new FormControl('2. answer'), value: new FormControl(false) }),
        new FormGroup({ text: new FormControl('3. answer'), value: new FormControl(true) }),
      ]),
      difficulty: new FormControl(0),
      moreInformations: new FormControl('')
    });
  }

  createQuestion(form) {
    console.log(this.questionForm.value); // return many properties and not object with array
  }
}
