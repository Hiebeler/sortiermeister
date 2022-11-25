import { atom } from "jotai";

const generateRandomArray = (): number[] => {
    let arr = [];
    while(arr.length < 10){
        var r = Math.floor(Math.random() * 100) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}

const randomArray: number[] = generateRandomArray();
console.log(randomArray)

const getColor = (index: number) => {
    const colors: string[] = ["rgb(239 68 68)", 'rgb(249 115 22)', 'rgb(234 179 8)', 'rgb(132 204 22)', 'rgb(34 197 94)', 'rgb(20 184 166)', 'rgb(6 182 212)', 'rgb(59 130 246)', 'rgb(168 85 247)', 'rgb(236 72 153)'];
    return colors[index];
}

const insertionSort = (arr:number[]) => {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;
      while ((j > -1) && (current < arr[j])) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr
  }

  const sortedArray = insertionSort([...randomArray]);
  const colorArray:any[] = [];
  console.log(randomArray)
  randomArray.forEach(element => {
    colorArray.push({num: element, color: getColor(sortedArray.indexOf(element))});
  });
  console.log(colorArray);

const computerList = atom<any[]>(colorArray);
const userList = atom<any[]>(colorArray)
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