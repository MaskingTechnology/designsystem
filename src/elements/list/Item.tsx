
import type { ReactNode} from 'react';

export type Props = {
    readonly children?: ReactNode;
};

export default function Element({ children }: Props)
{
    return <li>{children}</li>;
}
