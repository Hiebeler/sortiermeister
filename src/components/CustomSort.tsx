import { useAtom } from "jotai";
import { useEffect } from "react";
import { alreadyStarted, clickedElements, clicks, finished, firstClick, started, userList, userWon } from "../atomStorage";
import { Item } from "./Item";
export const CustomSort = () => {

    const [list, setList] = useAtom(userList)
    const [start] = useAtom(started)
    const [hasStarted, setStarted] = useAtom(alreadyStarted)
    const [finishedSorting, setFinished] = useAtom(finished)
    const [varFirstClick, setFirstClick] = useAtom(firstClick)
    const [elements, setElements] = useAtom(clickedElements)
    const [swapCount, setSwapCount] = useAtom(clicks)
    const [userWonGame, setUserWon] = useAtom(userWon)

    useEffect(() => {
        
    }, [hasStarted, list, setList, setStarted, start])

    

    const click = (index:number, element:any) => {
        if (!start || finishedSorting) return;
        if (!elements.find((el:any) => index === el.index)) {
            let localElements = [...elements]
            localElements.push({index, element})
            setElements(localElements)
            console.log(localElements)
        }
        console.log(firstClick);
        if (varFirstClick === -1) {
            setFirstClick(index);
            element.target.style.backgroundColor = 'red'
        } else {
            console.log("firstClick: " + firstClick + " second Click: " + index)
            const arr = [...swap(varFirstClick, index)]
            checkIfSortedCorrect(arr)
            setFirstClick(-1)
            setList(arr)
            setSwapCount(swapCount + 1)
            elements.forEach((el:any) => {
                el.element.target.style.backgroundColor = 'transparent'
            });
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
                <Item number={number} click={(element) => {click(index, element)}} key={index} />
            ))}
        </div>
    )
}