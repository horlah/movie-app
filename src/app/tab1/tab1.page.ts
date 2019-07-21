import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    slideOpts = {
        speed: 400
    };
    movies = [
        {
            image:  '/assets/img/toy_story.jpeg',
            title: 'Toy Story 4',
            stars: '4.5'
        },
        {
            image:  '/assets/img/black_panther.jpg',
            title: 'Avengers: End Game',
            stars: '4.9'
        },
        {
            image:  '/assets/img/toy_story.jpeg',
            title: 'Toy Story 4',
            stars: '4.5'
        },
        {
            image:  '/assets/img/black_panther.jpg',
            title: 'Avengers: End Game',
            stars: '4.9'
        },
        {
            image:  '/assets/img/avengers_end-game.jpg',
            title: 'Black Panther',
            stars: '4'
        },
        {
            image:  '/assets/img/black_panther.jpg',
            title: 'Avengers: End Game',
            stars: '4.9'
        },
        {
            image:  '/assets/img/avengers_end-game.jpg',
            title: 'Black Panther',
            stars: '4'
        },
    ];

    constructor(private navCtrl: NavController) { }

    viewDetails(movieDetails: any) {
        this.navCtrl.navigateForward('/view-details', {queryParams: {
            img: movieDetails.image,
            title: movieDetails.title,
            stars: movieDetails.stars
        }});
    }

}
