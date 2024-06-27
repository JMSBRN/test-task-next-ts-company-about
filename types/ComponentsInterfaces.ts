export interface FormData {
  name: string;
  email: string;
  message: string;
  agreement: boolean;
  [key: string]: string | boolean;
}
export interface FormElement {
  type: string;
  id: string;
  name: string;
  required: boolean;
  cols?: number;
  rows?: number;
  minLength?: number;
}
