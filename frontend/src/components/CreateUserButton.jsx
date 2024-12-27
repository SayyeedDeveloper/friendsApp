import {FaCirclePlus} from "react-icons/fa6";
import {useState} from "react";
import { IoIosCloseCircle } from "react-icons/io";

const CreateUserButton = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);

    };
    return (
        <>
            <button onClick={handleClick} className={'text-xl lg:text-3xl text-sky-600 dark:text-white'}>
                <FaCirclePlus/>
            </button>
            {toggle === true ? (
                <>
                    <div className={'opacity-50 fixed inset-0 w-[100%] h-[100%] bg-black'}></div>
                    <div onClick={handleClick} className={'createUserMode flex justify-center items-center fixed inset-0'}>
                        <div className={'w-8/12 md:w-6/12 lg:w-5/12 h-auto p-8 bg-sky-800 dark:bg-white text-white dark:text-sky-800 flex flex-col justify-start items-center relative rounded-lg'}
                             onClick={(e) => e.stopPropagation()} >
                            <button onClick={handleClick} className={'p-4 absolute right-0 top-0 text-md md:text-xl lg:text-2x'}>
                                <IoIosCloseCircle/>
                            </button>
                            <h1 className={'uppercase font-bold text-xl lg:text-2xl flex p-3'}>Add friends 😎</h1>
                            <form className={'m-2 text-white dark:text-sky-800'}>
                                <div className={'block md:flex gap-4'}>
                                    <div className={'w-full md:w-6/12'}>
                                        <label htmlFor="name"
                                               className="block text-sm/6 font-medium text-start capitalize">Full
                                            name</label>
                                        <div>
                                            <input type="text"
                                                   name="name"
                                                   id="name"
                                                   autoComplete="name"
                                                   placeholder={`Elon Musk`}
                                                   className="p-2 w-full text-sm/6 bg-sky-800 dark:bg-white border-solid border-[1px] dark:border-sky-800 border-white rounded-lg outline-none"
                                                   required
                                            />
                                        </div>
                                    </div>
                                    <div className={'w-full md:w-6/12'}>
                                        <label htmlFor="role"
                                               className="block text-sm/6 font-medium text-start">Role</label>
                                        <div>
                                            <input type="text"
                                                   name="role"
                                                   id="role"
                                                   autoComplete="role"
                                                   placeholder={`Software Engineer`}
                                                   className="p-2 w-full text-sm/6 bg-sky-800 dark:bg-white border-solid border-[1px] dark:border-sky-800 border-white rounded-lg outline-none"
                                                   required
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className={'pt-4'}>
                                    <label htmlFor="description"
                                           className="block text-sm/6 font-medium text-start">Description</label>
                                    <div>
                                        <textarea
                                               name="description"
                                               id="description"
                                               autoComplete="description"
                                               placeholder={`He is a software engineer who is also the CEO of Tesla Inc.`}
                                               className="p-2 w-full text-sm/6 bg-sky-800 dark:bg-white border-solid border-[1px] dark:border-sky-800 border-white rounded-lg outline-none overscroll-contain"
                                               required
                                        />
                                    </div>
                                </div>
                                <div className={'flex gap-3 mt-2'}>
                                    <div className={'flex gap-1'}>
                                        <label htmlFor={'male'}>Male</label>
                                        <input id={'male'} className={'flex self-center'} name={'gender'} value={'male'} alt={'male'} type="radio" defaultChecked={true}/>
                                    </div>
                                    <div className={'flex gap-1'}>
                                        <label htmlFor="{'female'}">Female</label>
                                        <input id={'female'}  className={'flex self-center'} name={'gender'} value={'female'} alt={'female'} type="radio" defaultChecked={false}/>
                                    </div>
                                </div>
                                <div className={'flex sm:flex-row-reverse gap-3 mt-2 self-end'}>
                                    <button type={'reset'}
                                            className={'p-1 bg-red-700 text-white px-3 rounded-lg'}>Reset
                                    </button>
                                    <button type={'submit'}
                                            className={'p-1 bg-white dark:bg-sky-800 text-sky-600 dark:text-white px-4 rounded-lg'}>Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}
export default CreateUserButton;