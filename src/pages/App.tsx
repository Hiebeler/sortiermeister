import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { started, finished, timer, computerList, computerTime, level } from '../atomStorage';
import { ComputerSort } from '../components/ComputerSort';
import { CustomSort } from '../components/CustomSort';
import { Dropdown } from '../components/Dropdown';
import { Finished } from '../components/Finished';
import { Ranking } from '../components/Ranking';
import { Timer } from '../components/Timer';
import './App.css';

const App = () => {

  const [startedGame, setStarted] = useAtom(started)
  const [finishedSort] = useAtom(finished)
  const [time] = useAtom(timer)
  const [list] = useAtom(computerList)
  const [, setComputerTime] = useAtom(computerTime)
  const [varLevel] = useAtom(level)
  
  let ranking = false
  const start = () => {
    setStarted(true);
  }

  useEffect(() => {

    const getTimeoutTime = () => {
      if (varLevel === 1) {
        return 2500
      } else if (varLevel === 2) {
        return 1500
      } else {
        return 950
      }
    }

    const insertionSort = () => {
      let time = 0;
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
        time += getTimeoutTime();
      }
      return time
    }
    setComputerTime(insertionSort());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // get url query params
  }, [startedGame, list, setComputerTime, varLevel])
  let urlParams = new URLSearchParams(window.location.search);
  ranking = urlParams.get('ranking') === 'true'
  return (
    <div>
      {ranking ? <div className='bg-background h-screen p-10'><Ranking /></div> : <div className='min-h-screen h-full px-20 pt-5 flex flex-col bg-background text-secondary'>
        <div className='flex flex-row w-full'>
          <h1 className='text-primary text-6xl font-dosis basis-1/2'>Sortiermeister</h1>
          <div className="w-full ml-20">
            <Dropdown />
          </div>
          {startedGame ? <button className='text-primary font-bold border-[5px] border-primary rounded-lg text-xl px-4 h-15' onClick={() => window.location.reload()}>Reset</button> : <button className='text-primary font-bold border-[5px] border-primary rounded-lg text-xl px-4 h-15' onClick={() => start()}>START</button>}
        </div>
        <div className='flex flex-row w-full items-center justify-center pt-10'>
          {!finishedSort ? <Timer /> : <div className='font-dosis text-2xl text-secondary'>Zeit: {(time / 1000).toFixed(1)}s</div>}
        </div>
        <div className='flex flex-col'>
          <div className='basis-6/12 pb-14 pt-10'><ComputerSort /></div>
          <div className='basis-6/12'><CustomSort /></div>
        </div>
        {finishedSort ? (<Finished />) : (<div></div>)}
        {!startedGame ? <Ranking /> : null}
      </div>}
    </div>
  );
}

export default App;
