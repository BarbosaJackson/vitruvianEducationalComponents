import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';
import { UserComponent } from './user/user.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RankingComponent } from './ranking/ranking.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';

const routes = [
  {path: 'user/:username', component: UserComponent},
  {path: 'user/:username/tasks/:idx', component: QuizComponent},
  {path: 'user/:username/ranking', component: RankingComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuizComponent,
    UserComponent,
    LoginComponent,
    RankingComponent,
    MenuComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent, LoginComponent, RegisterComponent]
})
export class AppModule { }
