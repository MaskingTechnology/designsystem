
import type { ReactElement } from 'react';

import type { Props as ItemProps } from './Item';
import Item from './Item';

import './List.css';

type Props = {
    readonly type: 'ordered' | 'unordered';
    readonly size?: 'small' | 'medium' | 'large';
    readonly children: ReactElement<ItemProps> | ReactElement<ItemProps>[];
};

export function List({ type, size = 'medium', children }: Props)
{
    const className = 'list'
        + ' type-' + type
        + ' size-' + size;

    return type === 'ordered'
        ? <ol className={className}>{children}</ol>
        : <ul className={className}>{children}</ul>;
}

List.Item = Item;
