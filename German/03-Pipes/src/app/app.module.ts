import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LowercasePipe } from './custom-pipes/lowercase.pipe';

@NgModule({
  declarations: [AppComponent, LowercasePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [LowercasePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
