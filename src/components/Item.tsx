type Props = {
    number:number
}

export const Item = (props:Props) => {
    return (
        <div>
            {props.number}
        </div>
    ) 
}