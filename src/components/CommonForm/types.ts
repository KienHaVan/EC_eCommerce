import { SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

export interface Props {
  upperTitle?: string;
  onSubmit: SubmitHandler<any>;
  submitButtonText: string;
  formFields: formFieldType[];
  formSchema: yup.ObjectSchema<any>;
  mode?: 'forgot' | 'show';
}

interface formFieldType {
  name: string;
  label: string;
  type: string;
}
