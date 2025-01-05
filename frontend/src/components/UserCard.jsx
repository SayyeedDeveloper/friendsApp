import EditUser from "./EditUser.jsx";
import { MdDeleteForever } from "react-icons/md";
import {data} from "autoprefixer";
import {BASE_URL} from "../App.jsx";

const UserCard = ({user, setUsers, setActiveToast}) => {
    const handleDelete = async () => {
        try {
            const res = await fetch( BASE_URL + '/friends/' + user.id, {
                method: 'DELETE'
            });
            console.log(res);
            if (!res.ok){
                throw new Error(data.error);
            }
            setUsers((prevUser) => prevUser.filter((u) => u.id !== user.id));
            setActiveToast({show: true, type: 'success', child: 'Friend deleted successfully!'});
        }catch (error){
            setActiveToast({show: true, type: 'error', child: 'Something went wrong please try again!'});
            console.error(error);
        }
    }
    return(
        <div className={'bg-white  shadow shadow-sky-600 dark:shadow-inherit dark:bg-sky-600 rounded-lg p-4 w-[300px] text-sky-600 dark:text-white'}>
            <div className={'flex justify-between'}>
                <div className={'flex gap-2'}>
                    <img className={'w-[50px] h-auto'} src={user.imageUrl} alt={user.name} loading={"eager"}/>
                    <div className={'flex text-sm flex-col justify-center items-start font-semibold'}>
                        <h1>{user.name}</h1>
                        <h1>{user.role}</h1>
                    </div>
                </div>
                <div className={'flex gap-2 justify-self-end items-start text-sm'}>
                    <EditUser user={user} setUsers={setUsers} setActiveToast={setActiveToast}/>
                    <MdDeleteForever className={'text-red-800 cursor-pointer hover:text-red-600'} onClick={handleDelete}/>
                </div>
            </div>
            <div className={'text-xs font-thin text-start pt-4 text-gray-500 dark:text-gray-200'}>
                <p>{user.description}</p>
            </div>
        </div>
    )
}
export default UserCard;