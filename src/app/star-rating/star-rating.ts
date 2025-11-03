import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css'
})
export class StarRating {
  auxRating!: number;
  @Input () rating!: number;
 
  ngOnInit() {
    this.restoreRating();
  }

  restoreRating() {
    this.auxRating = Math.round(this.rating);
  }

  @Output () ratingChanged = new EventEmitter<number>();

  setRating() {
    this.ratingChanged.emit(this.auxRating);
  }
}
