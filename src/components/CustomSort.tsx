import { useAtom } from "jotai";
import { useEffect } from "react";
import { alreadyStarted, clicks, finished, firstClick, started, userList, userWon } from "../atomStorage";
import { Item } from "./Item";
export const CustomSort = () => {

    const [list, setList] = useAtom(userList)
    const [start] = useAtom(started)
    const [hasStarted, setStarted] = useAtom(alreadyStarted)
    const [finishedSorting, setFinished] = useAtom(finished)
    const [varFirstClick, setFirstClick] = useAtom(firstClick)
    const [swapCount, setSwapCount] = useAtom(clicks)
    const [userWonGame, setUserWon] = useAtom(userWon)

    useEffect(() => {
        
    }, [hasStarted, list, setList, setStarted, start])

    

    const click = (index:number) => {
        if (!start || finishedSorting) return;
        console.log(firstClick);
        if (varFirstClick === -1) {
            setFirstClick(index);
        } else {
            console.log("firstClick: " + firstClick + " second Click: " + index)
            const arr = [...swap(varFirstClick, index)]
            checkIfSortedCorrect(arr)
            setFirstClick(-1)
            setList(arr)
            setSwapCount(swapCount + 1)
        }
    }

    const swap = (index1:number, index2:number) => {
        let arr = [...list]
        let temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
        return arr
    }

    const checkIfSortedCorrect = (arr:number[]) => {
        let sorted = true;
        console.log(arr)
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                sorted = false;
                console.log(arr[i], arr[i + 1])
                break;
            }
        }
        if (sorted) {
            console.log("finished")
            setFinished(true)
            if (userWonGame !== false) {
                setUserWon(true)
            }
        }
    }


    return (
        <div className="flex-row flex gap-5">
            {list.map((number, index) => (
                (varFirstClick === index ? <Item number={number} click={() => {click(index)}} key={index} active={true}/>: <Item number={number} click={() => {click(index)}} key={index} active={false}/>)
            ))} 
        </div>
    )
}