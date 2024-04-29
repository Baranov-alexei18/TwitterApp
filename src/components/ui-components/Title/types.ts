import { ReactNode } from 'react';

export type TitleType = {
    row: string;
    children: ReactNode
};

export type TitleStyle = {
    [s: string]:{
        weight: string;
        size: string;
    }
}
