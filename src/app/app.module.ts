import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DynamicFormsModule } from './dynamic-forms/dynamic-forms.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    DynamicFormsModule
  ],
  entryComponents: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
