import { useAtom } from "jotai";
import { useEffect } from "react";
import { alreadyStarted, computerList, finished, started, userWon } from "../atomStorage";
import { Item } from "./Item";

export const ComputerSort = () => {

    const [list, setList] = useAtom(computerList)
    const [start] = useAtom(started)
    const [hasStarted, setStarted] = useAtom(alreadyStarted)
    const [gameFinished, setFinished] = useAtom(finished)
    const [userWonGame, setUserWon] = useAtom(userWon)
    
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    
    useEffect(() => {
        if (userWonGame !== true && gameFinished) {
            setUserWon(false)
        }
        const insertionSort = async () => {
            let arr = [...list]
            let n = arr.length;
            for (let i = 1; i < n; i++) {
                let current = arr[i];
                let j = i - 1;
                while ((j > -1) && (current < arr[j])) {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1] = current;
                await sleep(2000)
                setList([...arr]);
            }
            console.log("finished")
            setFinished(true)
            setList(arr)
            
        }
        
        if (start && !hasStarted) {
            insertionSort();
            setStarted(true)
        }

        
    
    }, [hasStarted, list, setList, setStarted, start, setFinished, userWonGame, setUserWon, gameFinished])

    return (
        <div className="flex-row flex gap-5">
            {list.map((number, index) => (
                <Item number={number} click={() => {}} key={index} active={false}/>
            ))}
        </div>
    )
}