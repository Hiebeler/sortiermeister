import { atom } from "jotai";

const computerList = atom<any[]>([]);
const userList = atom<any[]>([])
const alreadyStarted = atom<boolean>(false)
const started = atom(false);
const finished = atom<boolean>(false);
const timer = atom(0)
const computerTime = atom(0)
const clicks = atom(0)
const firstClick = atom(-1)
const clickedElements = atom<any[]>([])
const userWon = atom<any>(null)
const level = atom<number>(1)
const alreadySaved = atom<boolean>(false)

export { computerList, userList, started, alreadyStarted, finished, timer, computerTime, firstClick, clicks, clickedElements, userWon, level, alreadySaved };