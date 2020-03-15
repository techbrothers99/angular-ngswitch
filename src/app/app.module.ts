import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightColorDirective } from './custom-directives/highlight-color.directive';
import { DisplayDirective } from './custom-directives/display.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HighlightColorDirective,
    DisplayDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
