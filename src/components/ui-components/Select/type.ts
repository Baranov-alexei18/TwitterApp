import { ChangeEvent } from 'react';

export type Option = {
    value: string|number;
    label: string;
  };

export type SelectProps = {
    options: Option[];
    size: string;
    width: string;
    borderColor: string;
    color: string;
    placeholder: string;
    backgroundColor: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  };
