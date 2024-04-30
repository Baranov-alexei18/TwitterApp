import { ReactNode } from 'react';

export type TitleStyled = {
    weight: string;
    size: string;
};

export type TitleType = {
    xs: TitleStyled;
    sm: TitleStyled;
    md: TitleStyled;
    lg: TitleStyled;
};

export type TitleProps = {
    row: string;
    children: ReactNode;
};
