import { Component, AfterViewInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  rooms = [];
  originIndicator: HTMLElement | null = null;
  mapLayout: HTMLElement | null = null;
  zoomedRoom: HTMLElement | null = null;

  ngAfterViewInit() {
    this.originIndicator = document.getElementById('origin-indicator');
    this.mapLayout = document.querySelector('.map-layout') as HTMLElement;
  }

  clickRoom(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const room = target.closest('.room') as HTMLElement;

    if(!this.mapLayout) this.mapLayout = document.querySelector('.map-layout') as HTMLElement;

    if (room) {
      if(this.zoomedRoom && room == this.zoomedRoom) {
        console.log(`Clicked on already zoomed room: ${room}`);
        //If the same room is clicked again, zoom back out to the original view
        this.resetRoom();
        return;
      } else if(this.zoomedRoom) {
        //if a different room is clicked AND zoomed room is not null, zoom out to original view before zooming in on new room
        this.resetRoom();
      }

      // zoom into mapLayout and center on target
      const targetRect = target.getBoundingClientRect();
      const containerRect = this.mapLayout.getBoundingClientRect();

      console.log('Target Rect:', targetRect);
      console.log('Container Rect:', containerRect);

      let xOffset = containerRect.width / 2 - (targetRect.left + targetRect.width / 2);
      let yOffset = containerRect.height / 2 - (targetRect.top + targetRect.height / 2);


      let x = targetRect.left + targetRect.width/2;
      let y = targetRect.top + targetRect.height/2;

      console.log(`Calculated offsets - X: ${xOffset}, Y: ${yOffset}`);

      //mapLayout.style.transformBox = 'view-box';
      this.mapLayout.style.transformOrigin = `${x}px ${y-yOffset*2}px`;

      //move the origin indicator to the center of the target
      if (this.originIndicator) {
        this.originIndicator.style.left = `${x}px`;
        this.originIndicator.style.top = `${y}px`;
      }

      this.mapLayout.style.transform = 'scale(2)'; // Adjust the scale factor as needed
      //this.mapLayout.style.translate = `0px ${y}px`;

      this.zoomedRoom = room;
    }
  }


  resetRoom() {
    if(!this.mapLayout) this.mapLayout = document.querySelector('.map-layout') as HTMLElement;
    this.zoomedRoom = null;
    this.mapLayout.style.transform = 'scale(1)';
    this.mapLayout.style.translate = `0px 0px`;
  }
}

