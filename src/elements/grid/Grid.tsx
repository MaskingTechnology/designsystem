
import type { ReactNode } from 'react';

import './Grid.css';

type Props = {
    readonly layout: 'two-columns' | 'three-columns' | 'four-columns';
    readonly gap?: 'none' | 'small' | 'medium' | 'large';
    readonly children: ReactNode;
};

export function Grid({ layout, gap = 'medium', children }: Props)
{
    const className = 'grid'
        + ' layout-' + layout
        + ' gap-' + gap;

    return <div className={className}>
        {children}
    </div>;
}
