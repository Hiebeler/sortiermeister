import { useAtom } from "jotai";
import { useEffect } from "react";
import { clicks, computerTime, timer, userWon } from "../atomStorage";
import { Ranking } from "./Ranking";

export const Finished = () => {

    const [swaps] = useAtom(clicks)
    const [userWonGame] = useAtom(userWon)
    const [varComputerTime] = useAtom(computerTime)
    const [userTime] = useAtom(timer)
    console.log(userWonGame)

    useEffect(() => {
        if (userWonGame) {
            window.prompt("Deine Zeit: " + (userTime / 1000).toFixed(1) + "s\nDeine Swaps: " + swaps)
        }
    }, [swaps, userTime, userWonGame])

    return (
        <div className="flex-col flex mt-10">
            <div className="flex flex-row">
                <div className="basis-1/2">
                    {userWonGame ? <h1 className="text-4xl font-dosis text-primary">You won!</h1> : <h1 className="text-4xl font-dosis text-[#c25132]">You lost!</h1>}
                </div>
            </div>
            <div>
                Swaps: {swaps}
            </div>
            <div>
                {!userWonGame ? (<div>{userWonGame}</div>) : (<p>Computer would have needed {(varComputerTime / 1000).toFixed(1)}s</p>)}
            </div>
            <Ranking />
        </div>
    )
}