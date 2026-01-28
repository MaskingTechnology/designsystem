
import { Column, ClickArea, Image, Text, Row } from '../../index.js';

export type Props = {
    readonly title: string;
    readonly active: boolean;
    readonly activeIcon: string;
    readonly inactiveIcon: string;
    readonly orientation?: 'horizontal' | 'vertical';
    readonly onClick: () => void;
};

export default function Item({ title, active, activeIcon, inactiveIcon, orientation = 'horizontal', onClick }: Props)
{
    const horizontal = orientation === 'horizontal';

    const Container = horizontal ? Row : Column;

    const gapSize = horizontal ? 'medium' : 'small';
    const alignX = horizontal ? 'left' : 'center';
    const iconSize = horizontal ? '1.6em' : '2em';
    const textSize = horizontal ? 'large' : 'small';

    return <Column gap='none' alignX='stretch'>
        <ClickArea padding='small' effect='hover' alignX={alignX} onClick={onClick}>
            <Container gap={gapSize} alignX={alignX} alignY='center'>
                <Image source={active ? activeIcon : inactiveIcon} width={iconSize} />
                <Text value={title} type={active ? 'primary' : 'secondary'} size={textSize} weight={active ? 'bold' : 'normal'} />
            </Container>
        </ClickArea>
    </Column>;
}
