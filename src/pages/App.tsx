import { useAtom } from 'jotai';
import { started } from '../atomStorage';
import { ComputerSort } from '../components/ComputerSort';
import './App.css';

const App = () => {

  const [, setStarted] = useAtom(started)
  return (
    <div className='bg-amber-50'>
      <h1 className='text-3xl font-bold underline'>Sortiermeister</h1>
      <button onClick={() => setStarted(true)}>START</button>
      <ComputerSort />
    </div>
  );
}

export default App;
