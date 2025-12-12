
import type { ReactElement } from 'react';
import { useEffect, useEffectEvent, useMemo, useState } from 'react';

import type { Props as ModalProps } from '../../elements/modal/Modal';

type Props = {
    readonly selectedId?: string;
    readonly children: ReactElement<ModalProps> | ReactElement<ModalProps>[];
};

export default function Component({ selectedId, children}: Props)
{
    const [selected, setSelected] = useState<string>(selectedId ?? '');

    const modalList = useMemo(() =>
    {
        return Array.isArray(children) ? children : [children];

    }, [children]);

    const modalMap = useMemo(() =>
    {
        const modals: Record<string, ReactElement> = {};

        modalList.forEach((element) =>
        {
            const tabId = element.props.id;
            modals[tabId] = element;
        });

        return modals;

    }, [modalList]);

    const updateSelected = useEffectEvent((selectedId?: string) =>
    {
        setSelected(selectedId ?? '');
    });

    useEffect(() =>
    {
        updateSelected(selectedId);

    }, [selectedId, modalList]);

    return modalMap[selected] ?? <></>;
}
