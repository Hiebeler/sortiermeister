import { useEffect, useState } from "react"

export const Ranking = () => {

    const [list, setList] = useState([]);

    const getList = async() => {
        const response = await fetch("https://sortiermeister-backend.shorty8274.workers.dev/b4c0351f53/list")
        const data = await response.json()
        console.log(data[0].players)
        setList(data[0].players)
    }   

    useEffect(() => {
        getList();
    }, [])

    return (
        <div className="flex-col flex mt-5">
            <div className="flex flex-row">
                { list.map((item:any, index:number) => ((<div key={index}>{item.name}</div>))) }
            </div>
        </div>
    )


}