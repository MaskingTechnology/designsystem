
import type { ChangeEventHandler} from 'react';
import { forwardRef } from 'react';

import './CheckBox.css';

export type Props = {
    readonly name: string;
    readonly label: string;
    readonly defaultChecked?: boolean;
    readonly checked?: boolean;
    readonly value?: string;
    readonly required?: boolean;
    readonly onChange?: ChangeEventHandler<HTMLInputElement>;
};

type Ref = HTMLInputElement;

export const CheckBox = forwardRef<Ref, Props>(function Element({ name, label, defaultChecked, checked, value, required, onChange }, ref)
{
    const className = 'checkbox';

    return <label className={className}>
        <input
            type='checkbox'
            defaultChecked={defaultChecked}
            checked={checked}
            value={value}
            name={name}
            ref={ref}
            required={required}
            onChange={onChange}
        />
        {label}
    </label>;
});
