
import type { ReactElement } from 'react';

import { Column, Row, Navigation } from '../../index.js';

import Item from './Item';
import type { Props as ItemProps } from './Item';

type Props = {
    readonly orientation?: 'horizontal' | 'vertical';
    readonly children?: ReactElement<ItemProps> | ReactElement<ItemProps>[];
};

export function Menu({ orientation = 'horizontal', children }: Props)
{
    const horizontal = orientation === 'horizontal';

    const Container = horizontal ? Row : Column;

    const gapSize = horizontal ? 'medium' : 'small';
    const alignX = horizontal ? 'center' : 'left';

    return <Navigation>
        <Container gap={gapSize} alignX={alignX}>
            {children}
        </Container>
    </Navigation>;
}

Menu.Item = Item;
