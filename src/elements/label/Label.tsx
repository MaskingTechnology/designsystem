
import './Label.css';

export type Props = {
    readonly value: string;
};

export function Label({ value }: Props)
{
    return <label className="label">
        {value}
    </label>;
}
