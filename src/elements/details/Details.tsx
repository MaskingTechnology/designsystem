
import { useState } from 'react';
import type { ReactNode, ToggleEvent } from 'react';

import './Details.css';

type Props = {
    readonly open?: boolean;
    readonly name?: string;
    readonly summary: ReactNode;
    readonly children: ReactNode;
    readonly onToggle?: (open: boolean) => void;
};

export function Details({ open = false, name, summary, children, onToggle }: Props)
{
    const [opened, setOpened] = useState(open);
    
    const handleToggle = (event: ToggleEvent<HTMLDetailsElement>): void =>
    {
        const newState = event.currentTarget.open;

        setOpened(newState);

        if (onToggle === undefined) return;

        onToggle(newState);
    };

    return <details className='details' open={open} name={name} onToggle={handleToggle} >
        <summary className='summary'>{summary}</summary>
        <div className='content'>{opened && children}</div>
    </details>;
}
