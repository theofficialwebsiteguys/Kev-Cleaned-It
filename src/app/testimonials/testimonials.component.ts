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
      name: 'Lizzy Bandzzz',
      description: 'I had a last minute event on a Wednesday that I needed my hair, nails and car done for. I was stressed but I was able to get my car wash as my nails were being done. Kev was meticulous in his work and didn’t miss a spot. Did I mention this was in the middle of the winter. All year around detailing while I work and handle my business is a win for me.',
      image: 'assets/reviews/lizzy-bandzzz.png',
      rating: 5 // Add rating property
    },
  {
    name: 'Juliana Salguero',
    description: 'Did a full interior detailing, my car came out looking like it was brand new! Kev really did an awesome job at getting into all the spots that are hard to reach, my car was smelling and looking amazing for weeks! Definitely will go back and highly recommend!!!',
    image: 'assets/reviews/juliana-salguero.png',
    rating: 5 // Add rating property
  },
  {
    name: 'Ann Pierre-Jean',
    description: 'Kev is very professional and takes great pride in his work! He did an absolute fantastic job with detailing my car. He was even able to remove sunscreen stains on the exterior that I thought was permanent! There was an instance where I had an emergency and Kev was out of town, but went out of his way and sent one of his employees to accommodate me ASAP!!! Thanks again Kev!',
    image: 'assets/reviews/ann-pierre.png',
    rating: 5 // Add rating property
  },
  {
    name: 'King White',
    description: 'Kevin cleaned my car, which was covered in MOLD all over the interior, in 2 hours. TWO HOURS. Any other business wouldve taken a whole 8 hour shift to do the same job. Great guy. Great service. You wont regret it.',
    image: 'assets/reviews/king-white.png',
    rating: 5 // Add rating property
  },
  {
    name: 'Manoj kumar reddy Kothapalli',
    description: 'I Have had a best experience. I have had bad experiences previously but with this guy I had a great outcome with very clean interior and I had all my car smell excellent and the body wash I had was a full clean hand wash with wheel washing it turned out to be very good',
    image: 'assets/reviews/manoj.png',
    rating: 5 // Add rating property
  },
  {
    name: 'Briana Ballesteros',
    description: 'Kev was phenomenal. I have young children who destroy the back of my car and he was able to thoroughly clean and disinfect everything, not leaving a trace behind. Kev left my car looking and smelling brand new. I would highly recommend him and I will most definitely be hiring him for future details.',
    image: 'assets/reviews/briana-ballesteros.png',
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