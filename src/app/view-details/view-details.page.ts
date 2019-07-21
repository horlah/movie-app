import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-view-details',
    templateUrl: './view-details.page.html',
    styleUrls: ['./view-details.page.scss'],
})
export class ViewDetailsPage implements OnInit {
    movieDetails: {title: string, image: string, stars: number};

    constructor(private route: ActivatedRoute) {
        const movieTitle = this.route.snapshot.queryParamMap.get('title');
        const movieStars = parseInt(this.route.snapshot.queryParamMap.get('stars'));
        const movieImage = this.route.snapshot.queryParamMap.get('img');

        this.movieDetails = {title: movieTitle, image: movieImage, stars: movieStars};
        console.log(this.movieDetails);
    }

    ngOnInit() {
    }

}
