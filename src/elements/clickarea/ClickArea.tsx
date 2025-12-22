
import type { ReactNode } from 'react';

import './ClickArea.css';

type Props = {
    readonly padding?: 'none' | 'small' | 'medium' | 'large';
    readonly onClick?: () => void;
    readonly children?: ReactNode;
};

export function ClickArea({ padding = 'none', onClick, children }: Props)
{
    const className = 'clickarea'
        + ' padding-' + padding;

    return <div className={className} onClick={onClick}>
        {children}
    </div>;
}
