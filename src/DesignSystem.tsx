
import type { ReactNode } from 'react';

import './DesignSystem.css';

type Props = {
    readonly children?: ReactNode;
};

export default function DesignSystem({ children }: Props)
{
    return <div className='mtds'>{ children }</div>
}
