import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from '../../shared/header/header.component';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-rot-black-sludge',
  standalone: true,
  imports: [MatSlideToggleModule, HeaderComponent, RouterOutlet],
  templateUrl: './rot-black-sludge.component.html',
  styleUrl: './rot-black-sludge.component.scss'
})
export class RotBlackSludgeComponent {

  pageName: string = 'Rot Black Sludge';
}
