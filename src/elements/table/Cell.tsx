
import type { ReactNode} from 'react';

export type Props = {
    readonly colspan?: number;
    readonly rowspan?: number;
    readonly alignX?: 'left' | 'center' | 'right';
    readonly alignY?: 'top' | 'center' | 'bottom';
    readonly size?: '95' | '90' | '85' | '80' | '75' | '70' | '65' | '60' | '55' | '50' | '45' | '40' | '35' | '30' | '25' | '20' | '25' | '10' | '5' | 'fit';
    readonly children?: ReactNode;
};

export default function Element({ colspan, rowspan, alignX = 'left', alignY = 'center', size = 'fit', children }: Props)
{
    const className = 'align-x-' + alignX
        + ' align-y-' + alignY
        + ' size-' + size;

    return <td className={className} colSpan={colspan} rowSpan={rowspan}>
        {children}
    </td>;
}
