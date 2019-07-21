import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-movie-reviews',
    templateUrl: './movie-reviews.page.html',
    styleUrls: ['./movie-reviews.page.scss'],
})
export class MovieReviewsPage implements OnInit {

    constructor(
        private modalCtrl: ModalController
    ) { }

    ngOnInit() {
    }

    closeModal() {
        this.modalCtrl.dismiss();
    }

}
