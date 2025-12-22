
import type { ReactNode } from 'react';

export type Props = {
    readonly id: string;
    readonly title: ReactNode;
    readonly children: ReactNode;
};

export default function Tab({ children }: Props)
{
    return <div className='tab'>
        {children}
    </div>;
}
