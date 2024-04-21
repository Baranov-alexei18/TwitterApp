import { UseControllerProps } from 'react-hook-form';

export type InputType = {
  name: string;
  type: string;
  placeholder: string;
  mask: (value: string, code:string) => string;
} & UseControllerProps;
