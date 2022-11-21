import { atom, useAtom } from 'jotai';
import { randomList, started } from '../atomStorage';
import { ComputerSort } from '../components/ComputerSort';
import './App.css';

const App = () => {

  const [start, setStarted] = useAtom(started)
  return (
    <div className='bg-amber-50'>
      <h1 className='text-3xl font-bold underline'>Sortiermeister</h1>
      <button onClick={() => setStarted(true)}>START</button>
      <ComputerSort />
    </div>
  );
}

export default App;
