
import type { ChangeEventHandler} from 'react';
import { forwardRef } from 'react';

import './TextArea.css';

export type Props = {
    readonly name: string;
    readonly placeholder?: string;
    readonly defaultValue?: string;
    readonly value?: string;
    readonly border?: 'none' | 'small' | 'medium' | 'large';
    readonly size?: 'small' | 'medium' | 'large';
    readonly cols?: number;
    readonly rows?: number;
    readonly limit?: number;
    readonly onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

type Ref = HTMLTextAreaElement;

export const TextArea = forwardRef<Ref, Props>(function Element({ name, placeholder, defaultValue, value, border ='small', size = 'medium', cols, rows, limit, onChange }, ref)
{
    const className = 'textarea'
        + ' border-' + border
        + ' size-' + size;

    return <textarea
        className={className}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        cols={cols}
        rows={rows}
        ref={ref}
        maxLength={limit}
        onChange={onChange}>
    </textarea>;
});
