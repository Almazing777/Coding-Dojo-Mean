import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { AlphaComponentComponent } from './alpha-component/alpha-component.component';
import { BetaComponentComponent } from './beta-component/beta-component.component';
import { GammaComponentComponent } from './beta-component/gamma-component/gamma-component.component'; // <-- Import HttpModule

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    AlphaComponentComponent,
    BetaComponentComponent,
    GammaComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
