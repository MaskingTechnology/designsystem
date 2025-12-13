
import type { ReactElement } from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Row from './Row';
import Cell from './Cell';

import type { Props as HeaderProps } from './Header';
import type { Props as BodyProps } from './Body';
import type { Props as FooterProps } from './Footer';

import './Table.css';

type Props = {
    readonly padding?: 'large' | 'medium' | 'small';
    readonly children?: ReactElement<HeaderProps> | ReactElement<BodyProps> | ReactElement<FooterProps>[];
};

export function Table({ padding = 'medium', children }: Props)
{
    const className = 'table'
        + ' padding-' + padding;

    return <table className={className}>
        {children}
    </table>;
}

Table.Header = Header;
Table.Body = Body;
Table.Footer = Footer;
Table.Row = Row;
Table.Cell = Cell;
