import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// import base material module
import { BaseMaterialModule } from './base/base-material.module';

// import dynamic field directive
import { DynamicFieldDirective } from './directives/dynamic-field.directive';

// import dynamic form interfaces
import { DynamicField } from './interfaces/dynamic-form-field.interface'
import { DynamicValidator } from './interfaces/dynamic-form-validator.interface'

// import dynamic form field components
import { DynamicInputComponent } from './components/dynamic-input/dynamic-input.component';
import { DynamicButtonComponent } from './components/dynamic-button/dynamic-button.component';

// import dynamic form components
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component'


@NgModule({
  declarations: [
    DynamicFieldDirective,
    DynamicInputComponent,
    DynamicButtonComponent,
    DynamicFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BaseMaterialModule,
  ],
  entryComponents: [
    DynamicInputComponent,
    DynamicButtonComponent
  ],
  exports: [
    DynamicFormComponent,
  ]
})
export class DynamicFormsModule { }
