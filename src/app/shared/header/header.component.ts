import { Component, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() title: string = '';
  @Input() previousPage: string = ''
  menuOpen: boolean = false;
  @ViewChild('menuButton') menuButton!: ElementRef;
  @ViewChild('menuPanel') menuPanel!: ElementRef;

  constructor() {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Close menu when clicking outside
  @HostListener('document:click', ['$event'])
    clickout(event: any){
      setTimeout(() =>{
        if(this.menuOpen){
          if(!this.menuPanel?.nativeElement.contains(event.target) && !this.menuButton?.nativeElement.contains(event.target)){
            this.menuOpen = false;
          }
        }
      }, 5)
    }

}
