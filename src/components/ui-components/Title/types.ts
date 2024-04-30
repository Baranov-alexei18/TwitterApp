import { ReactNode } from 'react';

type TextStyle = {
    weight: string;
    size: string;
};

export type TitleType = {
    xs: TextStyle;
    sm: TextStyle;
    md: TextStyle;
    lg: TextStyle;
};

export type TitleProps = {
    row: string;
    children: ReactNode;
};
