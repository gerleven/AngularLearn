import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import  {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [BrowserModule,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }