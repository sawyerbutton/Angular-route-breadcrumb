import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import {AnotherContentComponent} from './another-content/another-content.component';

const routes: Routes = [
  {
    path: 'forms',
    data: {
      breadcrumb: 'forms'
    },
    children: [
      {
        path: 'details',
        component: ContentComponent,
        data: {
          breadcrumb: 'details'
        },
      },
    ]
  },
  {
    path: 'elements',
    component: AnotherContentComponent,
    data: {
      breadcrumb: 'Elements'
    },
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
