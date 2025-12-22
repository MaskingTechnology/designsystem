
import type { ReactNode } from 'react';

import './Border.css';

type Props = {
    readonly type?: 'normal' | 'dashed' | 'dotted';
    readonly size?: 'small' | 'large' | 'medium';
    readonly padding?: 'none' | 'small' | 'medium' | 'large';
    readonly children?: ReactNode;
};

export function Border({ type = 'normal', size = 'large', padding = 'large', children }: Props)
{
    const className = 'border'
        + ' type-' + type
        + ' size-' + size
        + ' padding-' + padding;

    return <div className={className}>
        {children}
    </div>;
}
