
import type { ReactNode } from 'react';

import './Centered.css';

type Props = {
    readonly children?: ReactNode;
};

export function CenteredLayout({ children }: Props)
{
    return <div className='layout-centered'>
        <main>
            {children}
        </main>
    </div>;
}
