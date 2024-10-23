import { Component, NgModule } from '@angular/core';
import { FeaturesComponent } from '../features/features.component';

import { ContactComponent } from '../contact/contact.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { GalleryComponent } from '../gallery/gallery.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContactComponent,
    TestimonialsComponent,
    FeaturesComponent,
    ServicesComponent,
    AboutComponent,
    NavbarComponent,
    HeroComponent,
    GalleryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
