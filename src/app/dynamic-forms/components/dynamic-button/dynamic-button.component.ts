import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DynamicField } from "../../interfaces/dynamic-form-field.interface";

@Component({
  selector: 'app-dynamic-button',
  template: `
  <div class="demo-full-width margin-top" [formGroup]="group">
  <button type="submit" mat-raised-button color="primary">{{field.label}}</button>
  </div>
  `,
  styles: []
})
export class DynamicButtonComponent implements OnInit {

  field: DynamicField;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
