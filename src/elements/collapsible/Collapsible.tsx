
import type { ReactNode } from 'react';

import './Collapsible.css';

type Props = {
    readonly summary: ReactNode;
    readonly children: ReactNode;
};

export function Collapsible({ summary, children }: Props)
{
    return <details className='collapsible'>
        <summary>{summary}</summary>
        <div className='content'>{children}</div>
    </details>;
}
