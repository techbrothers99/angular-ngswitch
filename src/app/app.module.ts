import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightColorDirective } from './custom-directives/highlight-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HighlightColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
