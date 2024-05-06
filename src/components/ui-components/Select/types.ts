import { ChangeEvent } from 'react';

export type Option = {
    value: string|number;
    label: string;
  };

export type SelectProps = {
    options: Option[];
    name: string;
    size: string;
    width: string;
    borderColor: string;
    color: string;
    placeholder: string;
    backgroundColor: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  };
