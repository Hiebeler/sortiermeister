import { useAtom } from 'jotai';
import { started, finished, timer } from '../atomStorage';
import { ComputerSort } from '../components/ComputerSort';
import { CustomSort } from '../components/CustomSort';
import { Finished } from '../components/Finished';
import { Timer } from '../components/Timer';
import './App.css';

const App = () => {

  const [, setStarted] = useAtom(started)
  const [finishedSort] = useAtom(finished)
  const [time] = useAtom(timer)


  return (
    <div className='h-screen p-20' style={{ backgroundColor: "#F1EADE" }}>
      <h1 className='text-3xl font-bold underline'>Sortiermeister</h1>
      {!finishedSort ? <Timer />: <div>Zeit: {Math.floor(time / 1000)}s</div>}
      <button onClick={() => setStarted(true)}>START</button>
      <div className='flex flex-col'>
        <div className='basis-6/12 pb-20 pt-20'><ComputerSort /></div>
        <div className='basis-6/12'><CustomSort /></div>
      </div>
      {finishedSort ? (<Finished />) : (<div></div>)}
    </div>
  );
}

export default App;
