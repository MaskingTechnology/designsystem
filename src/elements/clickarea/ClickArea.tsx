
import type { ReactNode } from 'react';

import './ClickArea.css';

type Props = {
    readonly alignX?: 'left' | 'center' | 'right';
    readonly effect?: 'none' | 'hover';
    readonly padding?: 'none' | 'small' | 'medium' | 'large';
    readonly onClick?: () => void;
    readonly children?: ReactNode;
};

export function ClickArea({ alignX = 'left', effect = 'none', padding = 'none', onClick, children }: Props)
{
    const className = 'clickarea'
        + ' padding-' + padding
        + ' align-x-' + alignX
        + ' effect-' + effect;

    return <div className={className} onClick={onClick}>
        {children}
    </div>;
}
