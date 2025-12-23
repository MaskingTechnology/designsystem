
import type { ChangeEventHandler} from 'react';
import { forwardRef } from 'react';

import './Select.css';

export type Props = {
    readonly name: string;
    readonly options: Map<string, string>;
    readonly defaultValue?: string;
    readonly value?: string;
    readonly border?: 'none' | 'small' | 'medium' | 'large';
    readonly size?: 'small' | 'medium' | 'large';
    readonly onChange?: ChangeEventHandler<HTMLSelectElement>;
};

type Ref = HTMLSelectElement;

export const Select = forwardRef<Ref, Props>(function Element({ name, options, defaultValue, value, border ='small', size = 'medium', onChange }, ref)
{
    const className = 'select'
        + ' border-' + border
        + ' size-' + size;

    return <select
        className={className}
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        ref={ref}
    >
        {
            Array
                .from(options)
                .map(([key, value]) => <option key={key} value={key}>{value}</option>)
        }
    </select>;
});
