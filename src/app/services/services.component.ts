import { Component } from '@angular/core';
import { FeaturesComponent } from '../features/features.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FeaturesComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
