import { Routes } from '@angular/router';
import { RotBlackSludgeComponent } from './compaigns/rot-black-sludge/rot-black-sludge.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'rot-black-sludge',
    component: RotBlackSludgeComponent,
  }
];
