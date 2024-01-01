import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosecComponent } from '../../components/herosec/herosec.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HerosecComponent],
  templateUrl: './home.component.html',
})
export default class HomeComponent {

}
