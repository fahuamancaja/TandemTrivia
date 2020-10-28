import { Component, HostListener, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { IncorrectAnswer } from '../_models/incorrectanswer';
import { Quiz } from '../_models/quiz';
import { QuizService } from '../_services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user: User;
  quiz: Quiz;
  incorrect: IncorrectAnswer[] = [];

  radioModel = 'Middle';
  radioModelDisabled = 'Middle';
  modelGroupDisabled = false;

  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if(this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private accountService: AccountService, private toastr: ToastrService, public quizService: QuizService) {
      this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
   }

  ngOnInit(): void {
    this.loadQuestion();
  }

  loadQuestion() {
    this.quizService.getQuizQuestion(2).subscribe(quiz => {
      this.quiz = quiz;
      console.log(quiz);

      this.incorrect = quiz.incorrect;
    })
  }
}
