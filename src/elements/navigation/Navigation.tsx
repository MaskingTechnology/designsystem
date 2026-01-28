
import type { ReactNode } from 'react';

import './Navigation.css';

type Props = {
    readonly padding?: 'none' | 'small' | 'medium' | 'large';
    readonly children?: ReactNode;
};

export function Navigation({ padding = 'none', children }: Props)
{
    const className = 'navigation'
        + ' padding-' + padding;

    return <nav className={className}>
        {children}
    </nav>;
}
