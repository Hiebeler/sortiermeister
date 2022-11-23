import { useAtom } from "jotai";
import { useEffect } from "react";
import { finished, started, timer } from "../atomStorage";

export const Timer = () => {
    const [time, setTime] = useAtom(timer)
    const [start] = useAtom(started)
    const [finishedSort] = useAtom(finished)

    useEffect(() =>{
        let timer: any;
        if (start) {
        const startTime = new Date()
            timer = setInterval(() => {
                console.log(finishedSort)
                const difference = new Date().getTime() - startTime.getTime()
                setTime(difference)
                if (finishedSort) clearInterval(timer)
            }, 100);
        }
        return () => { clearInterval(timer); console.log("cleared") }
    }, [finishedSort, setTime, start])

    return (
        <div className="font-dosis text-2xl text-secondary">Zeit: {(time / 1000).toFixed(1)}s</div>
    )
}