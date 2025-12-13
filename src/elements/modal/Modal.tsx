
import type { ReactNode} from 'react';
import { useEffect, useRef } from 'react';

import './Modal.css';

export type Props = {
    readonly id?: string;
    readonly open?: boolean,
    readonly sizing?: 'full' | 'content';
    readonly children?: ReactNode;
};

export function Modal({ open = true, sizing = 'content', children }: Props)
{
    const ref = useRef<HTMLDialogElement>(null);

    const className = 'modal'
        + ' sizing-' + sizing;

    useEffect(() =>
    {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        open
            ? ref.current?.showModal()
            : ref.current?.close();
    }, [open]);

    return <dialog ref={ref} className={className}>
        {children}
    </dialog>;
}
