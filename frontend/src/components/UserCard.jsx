import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

const UserCard = ({user}) => {
    return(
        <div className={'bg-sky-600 dark:bg-sky-600 rounded-lg p-4 w-[300px] text-white'}>
            <div className={'flex justify-between'}>
                <div className={'flex gap-2'}>
                    <img className={'w-[50px] h-auto'} src={'https://avatar.iran.liara.run/public'} alt={user.name}/>
                    <div className={'flex text-sm flex-col justify-center items-start font-semibold'}>
                        <h1>{user.name}</h1>
                        <h1>{user.role}</h1>
                    </div>
                </div>
                <div className={'flex gap-2 justify-self-end text-sm'}>
                    <FiEdit/>
                    <MdDeleteForever className={'text-red-800'}/>
                </div>
            </div>
            <div className={'text-xs font-thin text-start pt-4 text-gray-200'}>
                <p>{user.description}</p>
            </div>
        </div>
    )
}
export default UserCard;