import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Services
import { GithubService } from './services';

//Components
import { AppComponent } from './app.component';
import { ProfileComponent, SearchComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
