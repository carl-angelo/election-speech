import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Components */
import { AppComponent } from './app.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    FormContainerComponent,
    TopNavComponent,
    SearchPanelComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
