import { atom } from "jotai";

const generateRandomArray = (): number[] => {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
}
const randomList = atom<number[]>(generateRandomArray())
const alreadyStarted = atom(false)
const started = atom<boolean>(false);

export { randomList, started, alreadyStarted };