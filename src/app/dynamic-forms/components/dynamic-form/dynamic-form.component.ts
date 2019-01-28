import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

// import interface for Input Config and Validator
import { DynamicField } from "../../interfaces/dynamic-form-field.interface";
import { DynamicValidator } from "../../interfaces/dynamic-form-validator.interface";

@Component({
  exportAs: 'dynamic-form',
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: DynamicField[] = []
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.createControl();
  }

  get value() {
    return this.form.value;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  createControl() {
    const group = this.formBuilder.group({});
    this.fields.forEach(field => {
      if (field.type === "button") return;
      const control = this.formBuilder.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }


  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

}
