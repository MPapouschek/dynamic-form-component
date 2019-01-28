import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
// import dynamic form field interface
import { DynamicField } from '../../interfaces/dynamic-form-field.interface'

@Component({
  selector: 'app-dynamic-input',
  template: `
    <mat-form-field class="full-width" [formGroup]="group">
  
      <input matInput [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">
    
      <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
        <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
      </ng-container>
    </mat-form-field>
  `,
  styles: []
})
export class DynamicInputComponent implements OnInit {

  field: DynamicField;
  group: FormGroup;

  constructor() { }


  ngOnInit() {
  }

}
