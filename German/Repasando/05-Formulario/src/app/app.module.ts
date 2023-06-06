import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    DrivenFormComponent,
    ReactiveFormsComponent
  ],
  imports: [BrowserModule,AppRoutingModule,FormsModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
