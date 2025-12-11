
import type { ReactElement } from 'react';

import type { Props as RowProps } from './Row';

export type Props = {
    readonly border?: 'large' | 'medium' | 'small' | 'none';
    readonly children?: ReactElement<RowProps>;
};

export default function Element({ border = 'medium', children }: Props)
{
    const className = 'border-' + border;

    return <tfoot className={className}>
        {children}
    </tfoot>;
}
