import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import UserGrid from "./components/userGrid.jsx";

function App() {
    const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');


    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        localStorage.setItem('mode', newMode);
    };

    useEffect(() => {
        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [mode]);

    return (
        <div className="min-h-screen text-center bg-white dark:bg-sky-800 text-sky-800
                        dark:text-white">
            <Navbar mode={mode} toggleMode={toggleMode}/>
            <h1 className="text-xl  p-5 lg:p-7 md:p-6 md:text-2xl lg:text-3xl font-bold uppercase">My Besties 🔥</h1>
            <div className={'container'}>
                <UserGrid/>
            </div>
        </div>
    );
}

export default App;