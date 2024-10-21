import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


import 'owl.carousel';

declare var $: any;
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})

export class TestimonialsComponent {
  users = [{
      name: 'Customer 1',
      description: 'review',
      image: 'assets/default.jpg',
      rating: 5 // Add rating property
    },
  {
    name: 'Customer 2',
    description: 'review',
    image: 'assets/default.jpg',
    rating: 5 // Add rating property
  },
  {
    name: 'Customer 3',
    description: 'review',
    image: 'assets/default.jpg',
    rating: 5 // Add rating property
  },
  {
    name: 'Customer 4',
    description: 'review',
    image: 'assets/default.jpg',
    rating: 5 // Add rating property
  },
  {
    name: 'Customer 5',
    description: 'review',
    image: 'assets/default.jpg',
    rating: 5 // Add rating property
  },
  {
    name: 'Customer 6',
    description: 'review',
    image: 'assets/default.jpg',
    rating: 5 // Add rating property
  }

  ];

  chunkedUsers = this.chunkArray(this.users, 3);

  // Function to chunk the array into groups of size
  chunkArray(array: any[], size: number): any[] {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }
}