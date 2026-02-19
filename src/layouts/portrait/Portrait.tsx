
import type { ReactNode } from 'react';

import './Portrait.css';

type Props = {
    readonly header?: ReactNode;
    readonly footer?: ReactNode;
    readonly children: ReactNode;
};

export function PortraitLayout({ header, footer, children }: Props)
{
    return <div className='layout-portrait'>
        <div className='content'>
            { header && <header>{header}</header> }
            <main>
                {children}
            </main>
            { footer && <footer>{footer}</footer> }
        </div>
    </div>;
}
