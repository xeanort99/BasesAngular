import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
import { EcmascriptComponent } from './ecmascript/ecmascript.component';

@NgModule({
  declarations: [AppComponent, EcmascriptComponent],
  imports: [
    BrowserModule, 
    HeroesModule, 
    ContadorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
