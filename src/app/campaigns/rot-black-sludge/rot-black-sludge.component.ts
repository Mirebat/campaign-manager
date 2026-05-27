import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from '../../shared/header/header.component';
import { RouterOutlet } from "@angular/router";
import { MapComponent } from "../../shared/map/map.component";
import { Room } from "../../models/data.model";

@Component({
  selector: 'app-rot-black-sludge',
  standalone: true,
  imports: [MatSlideToggleModule, HeaderComponent, MapComponent],
  templateUrl: './rot-black-sludge.component.html',
  styleUrl: './rot-black-sludge.component.scss'
})
export class RotBlackSludgeComponent {

  pageName: string = 'Rot Black Sludge';

  activeRoom: any = signal<Room|null>(null);

  constructor() {}

  setActiveRoom(room: Room) {
    console.log(`setting active room to:`, room);
    if(!room) return;
    this.activeRoom.set(room);
  }
}
