import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import UserGrid from "./components/userGrid.jsx";
import Toast from "./components/Toast.jsx";

function App() {
    const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');
    const [activeToast, setActiveToast] = useState({show: false});

    const [users, setUsers] = useState([]);

    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        localStorage.setItem('mode', newMode);
    };

    useEffect(() => {
        setActiveToast({show: true, type: 'success'});
    }, []);

    useEffect(() => {
        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [mode]);

    return (
        <div className="min-h-screen text-center bg-white dark:bg-sky-800 text-sky-600
                        dark:text-white">
            <Navbar mode={mode} toggleMode={toggleMode} setUsers={setUsers}/>
            <h1 className="text-xl  p-5 lg:p-7 md:p-6 md:text-2xl lg:text-3xl font-bold uppercase">My Besties 🔥</h1>
            <div className={'container'}>
                <UserGrid users={users} setUsers={setUsers}/>
            </div>
            {activeToast.show && (<Toast setActiveToast={setActiveToast} type={'warning'} child={'Sorry It will damage your account'}/>)}
        </div>
    );
}

export default App;