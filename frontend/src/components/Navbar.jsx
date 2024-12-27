import { AiFillMoon } from "react-icons/ai";
import { IoSunny } from "react-icons/io5";
import CreateUserButton from "./CreateUserButton.jsx";
import PropTypes from 'prop-types';

const Navbar = ({ mode, toggleMode }) => {
    return (
        <div className="w-full p-4 px-10 lg:px-20 border-b dark:border-gray-400 flex justify-between">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-sky-800 dark:text-white">Friends</h1>
            <div className="flex gap-3">
                <button onClick={toggleMode} className={'text-xl md:text-2xl lg:text-3xl text-sky-800 dark:text-white'}>
                    {mode === 'light' ? (
                        <IoSunny/>
                    ) : (
                        <AiFillMoon />
                    )}
                </button>
                <CreateUserButton />
            </div>
        </div>
    );
};

Navbar.propTypes = {
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired,
};

export default Navbar;