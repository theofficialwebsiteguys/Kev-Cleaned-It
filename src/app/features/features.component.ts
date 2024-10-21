import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent implements OnInit {
  sliderValue: number = 50; // Default slider value set to 50%

  ngOnInit() {
    const container1 = document.querySelector('.container') as HTMLElement;
    console.log(container1)
    const slider1 = document.querySelector('.slider') as HTMLInputElement;
    console.log(slider1)
    slider1.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      console.log(target.value)
      container1.style.setProperty('--position', `${target.value}%`);
      console.log("HERE")
    });

    const container2 = document.querySelector('.container2') as HTMLElement;
    const slider2 = document.querySelector('.slider2') as HTMLInputElement;
    slider2.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      console.log(target.value)
      container2.style.setProperty('--position', `${target.value}%`);
    });

    const container3 = document.querySelector('.container3') as HTMLElement;
    const slider3 = document.querySelector('.slider3') as HTMLInputElement;
    slider3.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      container3.style.setProperty('--position', `${target.value}%`);
    });
  }
  
}
