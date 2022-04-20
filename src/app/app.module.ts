import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { EcmascriptComponent } from './ecmascript/ecmascript.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent, EcmascriptComponent],
  imports: [
    BrowserModule, 
    HeroesModule, 
    ContadorModule,
    DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
