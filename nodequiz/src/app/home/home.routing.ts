import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { PresentationsComponent } from './presentations/presentations.component';

export const HomeRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', 
        component: HomeComponent
      },
      {
        path: 'quizzes',
        component: QuizSelectionComponent
      },
      {
        path: 'quiz/:id',
        component: QuizComponent
      },
      {
        path: 'presentations',
        component: PresentationsComponent
      }
    ]
  }
];