
import type { ChangeEventHandler} from 'react';
import { forwardRef } from 'react';

import './DateTime.css';

export type Props = {
    readonly name: string;
    readonly value?: string;
    readonly title?: string;
    readonly type?: 'datetime' | 'date' | 'time' | 'month' | 'week';
    readonly size?: 'large' | 'medium' | 'small';
    readonly required?: boolean;
    readonly onChange?: ChangeEventHandler<HTMLInputElement>;
};

type Ref = HTMLInputElement;

export default forwardRef<Ref, Props>(function Element({ name, value, title, type = 'datetime', size = 'medium', required, onChange }, ref)
{
    const className = 'datetime'
        + ' size-' + size;

    return <input
        className={className}
        type={type}
        name={name}
        defaultValue={value}
        title={title}
        ref={ref}
        required={required}
        onChange={onChange}
    />;
});
