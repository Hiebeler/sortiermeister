import { useAtom } from "jotai";
import { useState } from "react";
import { level, started } from "../atomStorage";

export const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const [varLevel, setLevel] = useAtom(level);
    const [gameStarted] = useAtom(started);

    const handleOpen = () => {
        if (!gameStarted) {
            setOpen(!open);
        }
    };

    const handleClick = (level: number) => {
        if (!gameStarted) {
            setLevel(level);
            setOpen(false);
        }
    }


    return (
        <div className="dropdown">
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" onClick={handleOpen} className="text-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center" type="button">Level {varLevel}<svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeWidth="3" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg></button>
            {open ? <div className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-200">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    {varLevel !== 1 ? <li>
                        <button className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleClick(1)}>Level 1</button>
                    </li> : null}
                    {varLevel !== 2 ? <li>
                        <button className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleClick(2)}>Level 2</button>
                    </li> : null}
                    {varLevel !== 3 ? <li>
                        <button className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleClick(3)}>Level 3</button>
                    </li> : null}
                </ul>
            </div> : <></>}

        </div>
    );
}