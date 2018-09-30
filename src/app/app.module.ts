import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {AppRoutingModule} from './app-routing.module';
import { ContentComponent } from './content/content.component';
import { AnotherContentComponent } from './another-content/another-content.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    ContentComponent,
    AnotherContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
