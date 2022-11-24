import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { started, finished, timer, computerList, computerTime } from '../atomStorage';
import { ComputerSort } from '../components/ComputerSort';
import { CustomSort } from '../components/CustomSort';
import { Finished } from '../components/Finished';
import { Timer } from '../components/Timer';
import './App.css';

const App = () => {

  const [startedGame, setStarted] = useAtom(started)
  const [finishedSort] = useAtom(finished)
  const [time] = useAtom(timer)
  const [list] = useAtom(computerList)
  const [, setComputerTime] = useAtom(computerTime)

  useEffect(() => {
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
        time += 2000;
      }
      console.log(time)
      return time
    }
    setComputerTime(insertionSort());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='min-h-screen h-full p-20 flex flex-col bg-background text-secondary'>
      <div className='flex flex-row w-full'>
        <h1 className='text-primary text-6xl font-dosis basis-full'>Sortiermeister</h1>
        {startedGame ? <button className='text-primary font-bold border-[5px] border-primary rounded-lg text-xl px-4' onClick={() => window.location.reload()}>Reset</button> : <button className='text-primary font-bold border-[5px] border-primary rounded-lg text-xl px-4' onClick={() => setStarted(true)}>START</button>}
      </div>
      <div className='flex flex-row w-full items-center justify-center pt-10'>
        {!finishedSort ? <Timer /> : <div className='font-dosis text-2xl text-secondary'>Zeit: {Math.floor(time / 1000)}s</div>}
      </div>
      <div className='flex flex-col'>
        <div className='basis-6/12 pb-14 pt-10'><ComputerSort /></div>
        <div className='basis-6/12'><CustomSort /></div>
      </div>
      {finishedSort ? (<Finished />) : (<div></div>)}
    </div>
  );
}

export default App;
