type Props = {
    number: number,
    click: (element:any) => void
}

export const Item = (props: Props) => {
    const color = () => {
        if (props.number < 10) {
            return 'rgb(239 68 68)'
        } else if (props.number < 20) {
            return 'rgb(249 115 22)'
        } else if (props.number < 30) {
            return 'rgb(234 179 8)'
        } else if (props.number < 40) {
            return 'rgb(132 204 22)'
        } else if (props.number < 50) {
            return 'rgb(34 197 94)'
        } else if (props.number < 60) {
            return 'rgb(20 184 166)'
        } else if (props.number < 70) {
            return 'rgb(6 182 212)'
        } else if (props.number < 80) {
            return 'rgb(59 130 246)'
        } else if (props.number < 90) {
            return 'rgb(168 85 247)'
        } else {
            return 'rgb(236 72 153)'
        }
    }

    return (
        <div className="w-full h-16 border-[5px] rounded-lg flex items-center justify-center text-xl" style={{borderColor: color()}} onClick={((element) => { props.click(element)})}>
            <p className="select-none font-[digital]" style={{color: color()}}>{props.number}</p>
        </div>
    )
}