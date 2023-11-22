import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { alreadySaved, clicks, timer, userWon } from "../atomStorage";
import { Ranking } from "./Ranking";

export const Finished = () => {

    const [swaps] = useAtom(clicks)
    const [userWonGame] = useAtom(userWon)
    const [userTime] = useAtom(timer)
    const [name, setName] = useState("")
    const [saved, setAlreadySaved] = useAtom(alreadySaved)


    useEffect(() => {
    }, [swaps, userTime, userWonGame])

    const handleChange = (event: any) => {
        setName(event.target.value);
    }

    const save = async (event: any) => {
        if (!saved) {
            postList();
            setAlreadySaved(true);
        }
        event.preventDefault();
    }

    const postList = async () => {
        await fetch(process.env.REACT_APP_API_URL + "/record", {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name, score: userTime})
        })
        window.location.reload()
    }

    return (
        <div className="flex-col flex mt-5">
            <div className="flex flex-row">
                <div className="basis-1/2">
                    {userWonGame ? <h1 className="text-4xl font-dosis text-primary">You won!</h1> : <h1 className="text-4xl font-dosis text-[#c25132]">You lost!</h1>}
                </div>
            </div>
            {userWonGame ? <form>
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">First name</label>
                <div className="flex flex-row">
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-72" placeholder="John" required onChange={handleChange} />
                    <button className='text-primary font-bold border-[5px] border-primary rounded-lg text-xl px-4 py-2 ml-10' onClick={save}>Speichern</button>
                </div>
            </form> : null}
            <Ranking />
        </div>
    )
}