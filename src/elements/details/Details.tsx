
import type { ReactNode } from 'react';

import './Details.css';

type Props = {
    readonly open?: boolean;
    readonly name?: string;
    readonly summary: ReactNode;
    readonly children: ReactNode;
};

export function Details({ open = false, name, summary, children }: Props)
{
    return <details className='details' open={open} name={name}>
        <summary className='summary'>{summary}</summary>
        <div className='content'>{children}</div>
    </details>;
}
