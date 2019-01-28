import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from "@angular/core";
import { FormGroup } from "@angular/forms";

// import  dynamic field config
import { DynamicField } from "../interfaces/dynamic-form-field.interface";

// import dynamic components
import { DynamicInputComponent } from '../components/dynamic-input/dynamic-input.component'
import { DynamicButtonComponent } from '../components/dynamic-button/dynamic-button.component'


// create constant wich hold the mapping between componentTitle and component
const componentMapper = {
  input: DynamicInputComponent,
  button: DynamicButtonComponent,
  // select: SelectComponent,
  // date: DateComponent,
  // radiobutton: RadiobuttonComponent,
  // checkbox: CheckboxComponent
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  @Input() field: DynamicField;
  @Input() group: FormGroup;

  componentRef: any;



  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }


  ngOnInit() {

    // get compomnent factory instance by component title
    const factory = this.resolver.resolveComponentFactory(componentMapper[this.field.type]);

    // create new component by factory
    this.componentRef = this.container.createComponent(factory);

    // assign field values from input binding to component
    this.componentRef.instance.field = this.field;

    // assign form group from input binding to component
    this.componentRef.instance.group = this.group;

  }




}
