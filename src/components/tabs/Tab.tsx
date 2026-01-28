
import { ClickArea, Column, Text } from '../../index';

export type Props = {
    readonly title: string;
    readonly active: boolean;
    readonly onClick: () => void;
};

export default function Tab({ title, active, onClick }: Props)
{
    return <Column alignX='stretch'>
        <ClickArea padding='medium' effect='hover' alignX='center' onClick={onClick}>
            <Text value={title} type={active ? 'primary' : 'secondary'} weight={active ? 'bold' : 'normal'} size='large' />
        </ClickArea>
    </Column>;
}
