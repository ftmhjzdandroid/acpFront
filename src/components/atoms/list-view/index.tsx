import { ReactNode } from 'react';
interface IProps {
    ulProps?: React.HTMLAttributes<HTMLUListElement>;

    liProps?: React.LiHTMLAttributes<HTMLLIElement>;

    listData?: ReactNode[];

    children?: ReactNode;
}
const ListView = (props: IProps) => {
    const { ulProps, liProps, listData = [], children } = props;
    return (
        <ul {...ulProps}>
            {listData.length > 0 &&
                listData.map(item => <li {...liProps}>{item}</li>)
            }
            {children}
        </ul>
    );
}

export default ListView;