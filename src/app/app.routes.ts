import { Routes } from '@angular/router';
import { RotBlackSludgeComponent } from './campaigns/rot-black-sludge/rot-black-sludge.component';
import { LandingComponent } from './landing/landing.component';
import { MapComponent } from './shared/map/map.component';
import { DetailsComponent } from './shared/details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'rot-black-sludge',
    component: RotBlackSludgeComponent,
    children: [
      {
        path: '',
        component: DetailsComponent,
      },
      {
        path: 'map',
        component: MapComponent,
      }
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
