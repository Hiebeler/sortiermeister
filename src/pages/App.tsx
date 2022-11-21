import { atom, useAtom } from 'jotai';
import { ComputerSort } from '../components/ComputerSort';
import './App.css';

const generateRandomArray = ():number[] => {
  return Array.from({length: 10}, () => Math.floor(Math.random() * 100));
}

const randomList = atom<number[]>(generateRandomArray())

const App = () => {

  const [list] = useAtom(randomList)
  console.log(list)
  return (
    <div>
      <ComputerSort list={list}/>
    </div>
  );
}

export default App;
