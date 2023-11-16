import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroselComponent } from '../carrossel/carrosel.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CarroselComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
