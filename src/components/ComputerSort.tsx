import { Item } from "./Item";

type Props = {
    list:number[];
}

export const ComputerSort = (props: Props) => {
    return (
        <div>
            {props.list.map((number) => (
                <Item number={number} />
            ))}
        </div>
    )
}