
import type { ReactElement } from 'react';

import type { Props as RowProps } from './Row';

export type Props = {
    readonly children?: ReactElement<RowProps>;
};

export default function Element({ children }: Props)
{
    return <thead>
        {children}
    </thead>;
}
