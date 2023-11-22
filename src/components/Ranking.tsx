import { useEffect, useState } from "react"

export const Ranking = () => {

    const [list, setList] = useState([]);

    const getList = async () => {
        console.log(process.env.REACT_APP_API_URL);
        const response = await fetch(process.env.REACT_APP_API_URL + "/")
        console.log(response);
        const data = await response.json()
        console.log(data);
        const leaderboard = data.map((item: any) => {
            return {"name": item.value, "time": item.score};
        })
        /*data.players = data.map((player: any) => {
            player.data.name = player.data.name === '' ? "Anonymous" : player.data.name
            return player
        }*/
        setList(leaderboard);
    }

    useEffect(() => {
        getList();
    }, [])
    return (
        <div className="flex-col flex mt-5 overflow-y-scroll max-h-96">
            <h1 className="text-4xl font-dosis text-primary">Ranking</h1>
            <div className="flex flex-col">
                {list.map((item: any, index: number) =>
                    <div className="flex flex-row" key={index}>
                        <div className="basis-1/4">
                            <h1 className="text-2xl font-dosis">{index + 1}. {item.name}</h1>
                        </div>
                        <div className="basis-1/4">
                            <h2 className="text-xl font-dosis">Zeit: {(item.time / 1000).toFixed(2)}s</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )


}