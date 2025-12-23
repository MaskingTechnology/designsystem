
import type { ChangeEventHandler} from 'react';
import { forwardRef } from 'react';

import './TextBox.css';

export type Props = {
    readonly name: string;
    readonly placeholder?: string;
    readonly defaultValue?: string;
    readonly value?: string;
    readonly limit?: number;
    readonly pattern?: string;
    readonly title?: string;
    readonly type?: 'email' | 'number' | 'password' | 'search' | 'text' | 'tel' | 'url';
    readonly border?: 'none' | 'small' | 'medium' | 'large';
    readonly size?: 'small' | 'medium' | 'large';
    readonly required?: boolean;
    readonly onChange?: ChangeEventHandler<HTMLInputElement>;
};

type Ref = HTMLInputElement;

export const TextBox = forwardRef<Ref, Props>(function Element({ name, placeholder, defaultValue, value, limit, pattern, title, type = 'text', border ='small', size = 'medium', required, onChange }, ref)
{
    const className = 'textbox'
        + ' border-' + border
        + ' size-' + size;

    return <input
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        maxLength={limit}
        pattern={pattern}
        title={title}
        ref={ref}
        required={required}
        onChange={onChange}
    />;
});
