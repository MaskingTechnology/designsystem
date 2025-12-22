
import './Spinner.css';

type Props = {
    readonly active?: boolean;
};

export function Spinner({ active = true }: Props)
{
    const className = 'spinner'
        + (active ? ' active' : '');

    return <div className={className}></div>;
}
