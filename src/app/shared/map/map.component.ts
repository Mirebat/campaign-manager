import { Component, AfterViewInit, Output, EventEmitter} from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  @Output() roomClicked = new EventEmitter<any>();
  //originIndicator: HTMLElement | null = null;
  mapLayout: HTMLElement | null = null;
  //zoomedRoom: HTMLElement | null = null;

  ngAfterViewInit() {
    //this.originIndicator = document.getElementById('origin-indicator');
    this.mapLayout = document.querySelector('.map-layout') as HTMLElement;
  }

  clickRoom(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const room = target.closest('.room') as HTMLElement;

    if(!this.mapLayout) this.mapLayout = document.querySelector('.map-layout') as HTMLElement;

    if (room) {
      /** Scrapping zooming on rooms for now. **/
      /*
      if(this.zoomedRoom && room == this.zoomedRoom) {
        console.log(`Clicked on already zoomed room: ${room}`);
        //If the same room is clicked again, zoom back out to the original view
        this.resetRoom();
        return;
      } else if(this.zoomedRoom) {
        // we want to find the difference between the last room and the current room and then translate to match the new room's position,
        // instead of zooming out and then back in, which causes a jarring visual effect.
        // To do this, we need to calculate the difference in position between the two rooms and then apply that difference
        // to the current transform of the map layout. This way, we can smoothly transition from one room to another without zooming out in between.
        const lastX = this.zoomedRoom.getBoundingClientRect().left + this.zoomedRoom.getBoundingClientRect().width/2;
        const lastY = this.zoomedRoom.getBoundingClientRect().top + this.zoomedRoom.getBoundingClientRect().height/2;
        const newX = room.getBoundingClientRect().left + room.getBoundingClientRect().width/2;
        const newY = room.getBoundingClientRect().top + room.getBoundingClientRect().height/2;
        const deltaX = newX - lastX;
        const deltaY = newY - lastY;
      }

      // zoom into mapLayout and center on target
      const targetRect = target.getBoundingClientRect();
      const containerRect = this.mapLayout.getBoundingClientRect();

      console.log(`distance from container left to window left: ${containerRect.left}`);
      console.log(`distance from container top to window top: ${containerRect.top}`);

      let targetCenterX = targetRect.left + targetRect.width/2;
      let targetCenterY = targetRect.top + targetRect.height/2;

      console.log(`distance from target left to window left: ${targetRect.left}`);
      console.log(`distance from target top to window top: ${targetRect.top}`);

      let targetCenterFromContainerLeft = targetCenterX - containerRect.left;
      let targetCenterFromContainerTop = targetCenterY - containerRect.top;

      console.log(`target center from container left: ${targetCenterFromContainerLeft}`);
      console.log(`target center from container top: ${targetCenterFromContainerTop}`);

      console.log(`distance from target left to container left: ${targetRect.left - containerRect.left}`);
      console.log(`distance from target top to container top: ${targetRect.top - containerRect.top}`);

      let centerX = containerRect.left + containerRect.width / 2;
      let centerY = containerRect.top + containerRect.height / 2;

      console.log(`container center - X: ${centerX}, Y: ${centerY}`);

      //move the origin indicator to the center of the target
      if (this.originIndicator) {
        this.originIndicator.style.left = `${centerX}px`;
        this.originIndicator.style.top = `${centerY}px`;
      }

      console.log(`distance from target center x to container center x: ${targetCenterX - centerX}`);
      console.log(`distance from target center y to container center y: ${targetCenterY - centerY}`);

      this.mapLayout.style.transformOrigin = `${centerX}px ${centerY}px`;
      let translateX = -1 * (targetCenterX - centerX);
      let translateY = -1 * (targetCenterY - centerY);
      let transformString = `scale(2)`;
      this.mapLayout.style.transform = `rotate(45deg)`;
      //this.mapLayout.style.transform = transformString;
      if(this.originIndicator) {
        //this.originIndicator.style.transform = transformString;
      }

      //this.mapLayout.style.transformOrigin = `${x}px ${y}px`;

      //this.mapLayout!.style.transform = 'scale(2)'; // Adjust the scale factor as needed

      this.zoomedRoom = room;
      */
    }
  }


  /*
  resetRoom() {
    if(!this.mapLayout) this.mapLayout = document.querySelector('.map-layout') as HTMLElement;
    this.zoomedRoom = null;
    this.mapLayout.style.transform = 'translate(0px, 0px) scale(1)';
  }
  */
}

