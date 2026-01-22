
import type { ReactElement } from 'react';

import { Column, Row, Ruler } from '../../index';

import Tab from './Tab';
import type { Props as TabProps } from './Tab';

type Props = {
    readonly children?: ReactElement<TabProps> | ReactElement<TabProps>[];
};

export function Tabs({ children }: Props)
{
    return <Column alignX='stretch' gap='none'>
        <Row alignX='justify'>
            {children}
        </Row>
        <Ruler direction='horizontal' size='small' />
    </Column>;
}

Tabs.Tab = Tab;
