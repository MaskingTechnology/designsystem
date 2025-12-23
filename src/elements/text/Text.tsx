
import './Text.css';

type Props = {
    readonly value: string;
    readonly type?: 'primary' | 'secondary';
    readonly size?: 'small' | 'medium' | 'large';
    readonly weight?: 'light' | 'normal' | 'bold';
    readonly wrap?: 'none' | 'normal' | 'break-word';
};

export function Text({ value, type = 'primary', size = 'medium', weight = 'normal', wrap = 'none' }: Props)
{
    const className = 'text'
        + ' type-' + type
        + ' size-' + size
        + ' weight-' + weight
        + ' wrap-' + wrap;

    return <span className={className}>
        {value}
    </span>;
}
