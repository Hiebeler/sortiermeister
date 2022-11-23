import { useAtom } from "jotai";
import { clicks, userWon } from "../atomStorage";

export const Finished = () => {

    const [swaps] = useAtom(clicks)
    const [userWonGame] = useAtom(userWon)

    return (
        <div className="flex-col flex">
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <h1 className="text-3xl font-bold underline">Finished</h1>
                </div>
            </div>
            <div>
                {swaps}
            </div>
            <div>
                {userWonGame ? "You won!" : "You lost!"}
            </div>
        </div>
    )
}