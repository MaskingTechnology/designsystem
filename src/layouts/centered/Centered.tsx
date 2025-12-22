
import type { ReactNode } from 'react';

import './Centered.css';

type Props = {
    readonly children?: ReactNode;
};

export function CenteredLayout({ children }: Props)
{
    return <main className='layout-centered'>
        <div className='content'>
            {children}
        </div>
    </main>;
}
