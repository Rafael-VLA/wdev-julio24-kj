import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CardComponent } from './components/card/card.component';
import { ProductComponent } from './components/product/product.component';
import { ListComponent } from './components/list/list.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CardComponent,
    ProductComponent,
    ListComponent // Le indico que voy a usar este componente en el módulo actual
  ],
  imports: [
    BrowserModule, // if - else if - for
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
