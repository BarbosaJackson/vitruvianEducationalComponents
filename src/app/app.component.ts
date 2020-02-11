import { Component } from '@angular/core';
import {QuestionModel} from './question/question.model';
import {QuizModel} from './quiz/quiz.model';
import {QuizService} from './quiz/quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vitruvianEducational';
  quizzes: QuizModel[] = [
      new QuizModel(1, [
          new QuestionModel('quanto é 1 + 2?', '3', ['1', '2', '3', '4', '5']),
          new QuestionModel('quanto é 1 + 1?', '2', ['1', '2', '3', '4', '5']),
          new QuestionModel('quanto é 3 + 1?', '4', ['1', '2', '3', '4', '5']),
        ], 'somar',
        'somando dois valores você pega a quantidade do segundo e acrescenta no primeiro'),
      new QuizModel(2, [
        new QuestionModel('quanto é 3 - 1?', '2', ['1', '2', '3', '4', '5']),
        new QuestionModel('quanto é 5 - 2?', '3', ['1', '2', '3', '4', '5']),
        new QuestionModel('quanto é 5 - 1?', '4', ['1', '2', '3', '4', '5']),
      ], 'subtrair',
        'subtrair dois valores é tirar do primeiro a quantidade do segundo'),
      new QuizModel(3, [
          new QuestionModel('quanto é 1 * 2?', '2', ['1', '2', '3', '4', '5']),
          new QuestionModel('quanto é 1 * 1?', '1', ['1', '2', '3', '4', '5']),
          new QuestionModel('quanto é 3 * 1?', '3', ['1', '2', '3', '4', '5']),
        ], 'multiplicar',
        'multiplicando dois valores você soma o primeiro a quantidade de vezes no segundo'),
      new QuizModel(3, [
          new QuestionModel('quanto é 1 * 2?', '2', ['1', '2', '3', '4', '5']),
          new QuestionModel('quanto é 1 * 1?', '1', ['1', '2', '3', '4', '5']),
          new QuestionModel('quanto é 3 * 1?', '3', ['1', '2', '3', '4', '5']),
        ], 'multiplicar',
        'multiplicando dois valores você soma o primeiro a quantidade de vezes no segundo'),
      new QuizModel(4, [
          new QuestionModel('quanto é 1 * 2?', '2', ['1', '2', '3', '4', '5']),
          new QuestionModel('quanto é 1 * 1?', '1', ['1', '2', '3', '4', '5']),
          new QuestionModel('quanto é 3 * 1?', '3', ['1', '2', '3', '4', '5']),
        ], 'multiplicar',
        'multiplicando dois valores você soma o primeiro a quantidade de vezes no segundo'),
      new QuizModel(5, [
          new QuestionModel('quanto é 1 * 2?', '2', ['1', '2', '3', '4', '5']),
          new QuestionModel('quanto é 1 * 1?', '1', ['1', '2', '3', '4', '5']),
          new QuestionModel('quanto é 3 * 1?', '3', ['1', '2', '3', '4', '5']),
        ], 'multiplicar',
        'multiplicando dois valores você soma o primeiro a quantidade de vezes no segundo'),
      new QuizModel(6, [
          new QuestionModel('quanto é 1 * 2?', '2', ['1', '2', '3', '4', '5']),
          new QuestionModel('quanto é 1 * 1?', '1', ['1', '2', '3', '4', '5']),
          new QuestionModel('quanto é 3 * 1?', '3', ['1', '2', '3', '4', '5']),
        ], 'multiplicar',
        'multiplicando dois valores você soma o primeiro a quantidade de vezes no segundo'),
      new QuizModel(7, [
          new QuestionModel('quanto é 1 * 2?', '2', ['1', '2', '3', '4', '5']),
          new QuestionModel('quanto é 1 * 1?', '1', ['1', '2', '3', '4', '5']),
          new QuestionModel('quanto é 3 * 1?', '3', ['1', '2', '3', '4', '5']),
        ], 'multiplicar',
        'multiplicando dois valores você soma o primeiro a quantidade de vezes no segundo'),];
  constructor(private quizService: QuizService) {
    this.quizService.quizzes = this.quizzes;
  }
}
