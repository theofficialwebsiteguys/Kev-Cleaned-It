import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images: { src: string, alt: string }[] = [
    { src: 'assets/gallery/gallery1.jpg', alt: 'Car' },
    { src: 'assets/gallery/gallery2.jpg', alt: 'Car' },
    { src: 'assets/gallery/gallery3.jpg', alt: 'Car' },
    { src: 'assets/gallery/gallery4.jpg', alt: 'Car' },
    { src: 'assets/gallery/gallery5.jpg', alt: 'Car' },
    { src: 'assets/gallery/gallery6.jpg', alt: 'Car' },
    { src: 'assets/gallery/gallery7.jpg', alt: 'Car' },
    { src: 'assets/gallery/gallery8.jpg', alt: 'Car' },
    { src: 'assets/gallery/gallery10.jpg', alt: 'Car' }
  ];
}
