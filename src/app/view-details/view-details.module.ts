import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewDetailsPage } from './view-details.page';
import { MovieReviewsPage } from '../movie-reviews/movie-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewDetailsPage, MovieReviewsPage],
  entryComponents: [MovieReviewsPage]
})
export class ViewDetailsPageModule {}
