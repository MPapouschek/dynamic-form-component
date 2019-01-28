import { Component, ViewChild, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { DynamicField } from "../app/dynamic-forms/interfaces/dynamic-form-field.interface";
import { DynamicFormComponent } from "../app/dynamic-forms/components/dynamic-form/dynamic-form.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angmat-dynamic-form-component';
  reqConfig: DynamicField[] = []
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  // getConfig(formTitle: string): DynamicField[] {
  //   return [
  //     {
  //       type: "input",
  //       label: "Username",
  //       inputType: "text",
  //       name: "name",
  //       validations: [
  //         {
  //           name: "required",
  //           validator: Validators.required,
  //           message: "Name Required"
  //         }
  //       ]
  //     },
  //     {
  //       type: "input",
  //       label: "Password",
  //       inputType: "password",
  //       name: "password",
  //       validations: [
  //         {
  //           name: "required",
  //           validator: Validators.required,
  //           message: "Password Required"
  //         }
  //       ]
  //     },
  //     {
  //       type: "button",
  //       label: "Save"
  //     }
  //   ]
  // }

  regConfig: DynamicField[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        }
      ]
    },
    {
      type: "input",
      label: "Password",
      inputType: "password",
      name: "password",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ]
    },
    {
      type: "button",
      label: "Save"
    }
  ]

  // regConfig$() {
  //   return new Promise((resolve, reject) => {
  //     resolve(
  //       [
  //         {
  //           type: "input",
  //           label: "Username",
  //           inputType: "text",
  //           name: "name",
  //           validations: [
  //             {
  //               name: "required",
  //               validator: Validators.required,
  //               message: "Name Required"
  //             }
  //           ]
  //         },
  //         {
  //           type: "input",
  //           label: "Password",
  //           inputType: "password",
  //           name: "password",
  //           validations: [
  //             {
  //               name: "required",
  //               validator: Validators.required,
  //               message: "Password Required"
  //             }
  //           ]
  //         },
  //         {
  //           type: "button",
  //           label: "Save"
  //         }
  //       ]
  //     )
  //   })
  // }

  submit(value: any) {
    console.log(value);
  }

}
