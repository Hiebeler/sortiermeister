import { useAtom } from "jotai";
import { useEffect } from "react";
import { alreadyStarted, computerList, finished, level, started, userWon } from "../atomStorage";
import { Item } from "./Item";

export const ComputerSort = () => {

    const [list, setList] = useAtom(computerList)
    const [start] = useAtom(started)
    const [hasStarted, setStarted] = useAtom(alreadyStarted)
    const [gameFinished, setFinished] = useAtom(finished)
    const [userWonGame, setUserWon] = useAtom(userWon)
    const [varLevel] = useAtom(level)

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    useEffect(() => {

        const getTimeoutTime = () => {
            if (varLevel === 1) {
              return 2500
            } else if (varLevel === 2) {
              return 1700
            } else {
              return 1100
            }
          }

        if (userWonGame !== true && gameFinished) {
            setUserWon(false)
        }
        const insertionSort = async () => {
            let arr = [...list]
            let n = arr.length;
            for (let i = 1; i < n; i++) {
                let current = arr[i];
                let j = i - 1;
                while ((j > -1) && (current.num < arr[j].num)) {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1] = current;
                await sleep(getTimeoutTime())
                setList([...arr]);
            }
            setFinished(true)
            setList(arr)

        }
        if (start && !hasStarted) {
            insertionSort();
            setStarted(true)
        }
    }, [hasStarted, list, setList, setStarted, start, setFinished, userWonGame, setUserWon, gameFinished, varLevel])

    return (
        <div className="flex flex-col">
            <div className="font-dosis text-2xl text-secondary pb-2">Computer</div>
            <div className="flex-row flex gap-5">
                {list.map((number, index) => (
                    <Item number={number} click={() => { }} key={index} active={false} />
                ))}
            </div>
        </div>
    )
}