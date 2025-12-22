
import type { ReactNode } from 'react';

import './Sidebar.css';

type Props = {
    readonly header?: ReactNode;
    readonly footer?: ReactNode;
    readonly sidebar: ReactNode;
    readonly children: ReactNode;
};

export function SidebarLayout({ header, footer, sidebar, children }: Props)
{
    return <div className='layout-sidebar'>
        <header>
            {header}
        </header>
        <div className='content'>
            <div className="left">
                <aside>
                    {sidebar}
                </aside>
            </div>
            <div className="right">
                <main>
                    {children}
                </main>
            </div>
        </div>
        <footer>
            {footer}
        </footer>
    </div>;
}
