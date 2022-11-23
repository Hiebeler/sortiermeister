import { useAtom } from "jotai";
import { clicks, userWon } from "../atomStorage";

export const Finished = () => {

    const [swaps] = useAtom(clicks)
    const [userWonGame] = useAtom(userWon)

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
        </div>
    )
}