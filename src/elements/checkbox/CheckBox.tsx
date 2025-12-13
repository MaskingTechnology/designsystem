
import type { ChangeEventHandler} from 'react';
import { forwardRef } from 'react';

import './CheckBox.css';

export type Props = {
    readonly name: string;
    readonly label: string;
    readonly checked?: boolean;
    readonly required?: boolean;
    readonly onChange?: ChangeEventHandler<HTMLInputElement>;
};

type Ref = HTMLInputElement;

export const CheckBox = forwardRef<Ref, Props>(function Element({ name, label, checked = false, required, onChange }, ref)
{
    const className = 'checkbox';

    return <label className={className}>
        <input
            type='checkbox'
            defaultChecked={checked}
            name={name}
            ref={ref}
            required={required}
            onChange={onChange}
        />
        {label}
    </label>;
});
