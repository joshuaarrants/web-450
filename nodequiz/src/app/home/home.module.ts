import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule, MatCardModule, MatToolbarModule, MatListModule, MatDividerModule, MatProgressBarModule, MatRadioModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";

import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuizComponent } from './quiz/quiz.component';
import { PresentationsComponent } from './presentations/presentations.component';

@NgModule({
  declarations: [HomeComponent, QuizSelectionComponent, QuizComponent, PresentationsComponent],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    MatDividerModule,
    MatProgressBarModule,
    MatRadioModule,
    ScrollDispatchModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(HomeRoutes)
  ]
})
export class HomeModule { }
