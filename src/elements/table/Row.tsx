
import type { ReactElement } from 'react';

import type { Props as CellProps } from './Cell';

export type Props = {
    readonly children?: ReactElement<CellProps>;
};

export default function Element({ children }: Props)
{
    return <tr>
        {children}
    </tr>;
}
