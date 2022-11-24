import { useEffect, useState } from "react"

export const Ranking = () => {

    const [list, setList] = useState([]);

    const getList = async () => {
        const response = await fetch("https://sortiermeister-backend.shorty8274.workers.dev/b4c0351f53/list")
        const data = await response.json()
        data[0].players[0] = { id: 1, data: { name: "test", time: 1000, computerTime: 1000, level: 1 } }
        setList(data[0].players.slice(0, 10))
    }

    useEffect(() => {
        getList();
    }, [])
    return (
        <div className="flex-col flex mt-5">
            <h1 className="text-4xl font-dosis text-primary">Ranking</h1>
            <div className="flex flex-col">
                {list.map((item: any, index: number) =>
                    <div className="flex flex-row" key={index}>
                        <div className="basis-1/4">
                            <h1 className="text-2xl font-dosis">{index + 1}. {item.data.name}</h1>
                        </div>
                        <div className="basis-1/4">
                            <h2 className="text-xl font-dosis">Zeit: {(item.data.time / 1000).toFixed(2)}s</h2>
                        </div>
                        <div className="basis-1/4">
                            <h2 className="text-xl font-dosis">Level: {item.data.level}</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )


}