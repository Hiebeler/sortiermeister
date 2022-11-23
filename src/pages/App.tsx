import { useAtom } from 'jotai';
import { started, finished, timer } from '../atomStorage';
import { ComputerSort } from '../components/ComputerSort';
import { CustomSort } from '../components/CustomSort';
import { Finished } from '../components/Finished';
import { Timer } from '../components/Timer';
import './App.css';

const App = () => {

  const [startedGame, setStarted] = useAtom(started)
  const [finishedSort] = useAtom(finished)
  const [time] = useAtom(timer)


  return (
    <div className='h-screen p-20 flex flex-col' style={{ backgroundColor: "#F1EADE" }}>
      <div className='flex flex-row w-full'>
        <h1 className='text-4xl font-bold basis-full font-[digitalo] text-[#ff8731]'>Sortiermeister</h1>
        {startedGame ? <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => window.location.reload()}>Reset</button>: <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setStarted(true)}>START</button>}
      </div>
      <div className='flex flex-row w-full items-center justify-center pt-10'>
      {!finishedSort ? <Timer /> : <div>Zeit: {Math.floor(time / 1000)}s</div>}
      </div>
      <div className='flex flex-col'>
        <div className='basis-6/12 pb-20 pt-20'><ComputerSort /></div>
        <div className='basis-6/12'><CustomSort /></div>
      </div>
      {finishedSort ? (<Finished />) : (<div></div>)}
    </div>
  );
}

export default App;
