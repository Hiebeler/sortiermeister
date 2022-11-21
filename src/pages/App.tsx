import { useAtom } from 'jotai';
import { started, finished } from '../atomStorage';
import { ComputerSort } from '../components/ComputerSort';
import { CustomSort } from '../components/CustomSort';
import './App.css';

const App = () => {

  const [, setStarted] = useAtom(started)
  const [finishedSort] = useAtom(finished)


  return (
    <div className='h-screen p-20' style={{backgroundColor:"#F1EADE"}}>
      <h1 className='text-3xl font-bold underline'>Sortiermeister</h1>
      <button onClick={() => setStarted(true)}>START</button>
      <div className='flex flex-col'>
        <div className='basis-6/12 pb-20 pt-20'><ComputerSort /></div>
        <div className='basis-6/12'><CustomSort /></div>
      </div>
      {finishedSort ? (<div>Finished</div>): (<div></div>)}
    </div>
  );
}

export default App;
