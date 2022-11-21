import { useAtom } from "jotai";
import { useEffect } from "react";
import { alreadyStarted, randomList, started } from "../atomStorage";
import { Item } from "./Item";

export const ComputerSort = () => {

    const [list, setList] = useAtom(randomList)
    const [start] = useAtom(started)
    const [hasStarted, setStarted] = useAtom(alreadyStarted)

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    
    useEffect(() => {

        const insertionSort = async () => {
            console.log("insertionSort")
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
                console.log("timeout ended")
                console.log(arr)
                setList([...arr]);
            }
            setList(arr)
        }
        
        if (start && !hasStarted) {
            insertionSort();
            setStarted(true)
        }

        
    
    }, [hasStarted, list, setList, setStarted, start])

    return (
        <div className="flex-row flex gap-5">
            {list.map((number, index) => (
                <Item number={number} key={index} />
            ))}
        </div>
    )
}