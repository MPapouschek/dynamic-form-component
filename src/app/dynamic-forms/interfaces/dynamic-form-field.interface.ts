import { DynamicValidator } from './dynamic-form-validator.interface'

export interface DynamicField {
    label?: string;
    name?: string;
    inputType?: string;
    options?: string[];
    collections?: any;
    type: string;
    value?: any;
    validations?: DynamicValidator[];
}