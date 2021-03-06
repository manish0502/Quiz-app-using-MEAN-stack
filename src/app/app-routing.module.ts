import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

    { path: '', component: LoginComponent },
    { path: 'leaderboard', component: LeaderboardComponent },
    { path: 'home', component: HomeComponent },
    { path: 'quiz', component: QuizComponent } ,
    // { path: 'register', component: RegisterComponent }
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
