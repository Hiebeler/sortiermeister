type Props = {
    number: any,
    active: boolean,
    click: () => void
}

export const Item = (props: Props) => {
    return (
        <div className="w-full h-16 border-[5px] rounded-lg flex items-center justify-center" style={{borderColor: props.number.color, backgroundColor: props.active ? "#373c40": "transparent"}} onClick={(() => { props.click()})}>
            <p className="select-none font-dosis tracking-widest text-[1.4rem]" style={{color: props.number.color}}>{props.number.num}</p>
        </div>
    )
}