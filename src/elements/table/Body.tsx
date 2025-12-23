
import type { ReactElement } from 'react';

import type { Props as RowProps } from './Row';

export type Props = {
    readonly border?: 'none' | 'small' | 'medium' | 'large';
    readonly children?: ReactElement<RowProps>;
};

export default function Element({ border = 'medium', children }: Props)
{
    const className = 'border-' + border;

    return <tbody className={className}>
        {children}
    </tbody>;
}
