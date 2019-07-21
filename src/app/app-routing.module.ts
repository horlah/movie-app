import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'view-details', loadChildren: './view-details/view-details.module#ViewDetailsPageModule' },
  { path: 'movie-reviews', loadChildren: './movie-reviews/movie-reviews.module#MovieReviewsPageModule' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
