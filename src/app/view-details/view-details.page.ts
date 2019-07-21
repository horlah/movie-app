import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { MovieReviewsPage } from '../movie-reviews/movie-reviews.page';

@Component({
    selector: 'app-view-details',
    templateUrl: './view-details.page.html',
    styleUrls: ['./view-details.page.scss'],
})
export class ViewDetailsPage implements OnInit {
    movieDetails: { title: string, image: string, stars: number };

    constructor(
        private route: ActivatedRoute,
        private modalCtrl: ModalController,
        private actionSheetCtrl: ActionSheetController
    ) {
        const movieTitle = this.route.snapshot.queryParamMap.get('title');
        const movieStars = parseInt(this.route.snapshot.queryParamMap.get('stars'));
        const movieImage = this.route.snapshot.queryParamMap.get('img');

        this.movieDetails = { title: movieTitle, image: movieImage, stars: movieStars };
    }

    ngOnInit() {
    }

    async showReview() {
        const modal = await this.modalCtrl.create({
            component: MovieReviewsPage
        });
        modal.present();
    }

    async showCinemaOptions() {
        const actionSheet = await this.actionSheetCtrl.create({
            header: 'Select Cinema',
            buttons: [
                {
                    text: 'Ozone Cinema',
                    handler: () => {
                        console.log('Delete clicked');
                    }
                }, {
                    text: 'Film House Cinema',
                    handler: () => {
                        console.log('Share clicked');
                    }
                }, {
                    text: 'Genesis Cinema',
                    handler: () => {
                        console.log('Play clicked');
                    }
                }, {
                    text: 'Silverbird Cinema',
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                }, {
                    text: 'Magnificent Cinema',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }]
        });
        await actionSheet.present();
    }


}
