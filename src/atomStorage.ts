import { atom } from "jotai";

const generateRandomArray = (): number[] => {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
}
const randomList = generateRandomArray();

const computerList = atom<number[]>(randomList);
const userList = atom<number[]>(randomList)
const alreadyStarted = atom(false)
const started = atom<boolean>(false);
const finished = atom(false);

export { computerList, userList, started, alreadyStarted, finished };