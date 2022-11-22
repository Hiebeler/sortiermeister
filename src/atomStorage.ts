import { atom } from "jotai";

const generateRandomArray = (): number[] => {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
}

const randomList = generateRandomArray();

const computerList = atom<number[]>(randomList);
const userList = atom<number[]>(randomList)
const alreadyStarted = atom<boolean>(false)
const started = atom(false);
const finished = atom<boolean>(false);
const timer = atom(0)
const clicks = atom(0)
const firstClick = atom(-1)

export { computerList, userList, started, alreadyStarted, finished, timer, firstClick, clicks };