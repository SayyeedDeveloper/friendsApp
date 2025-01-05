import UserCard from "./userCard.jsx";
import {useEffect, useState} from "react";
import {BASE_URL} from "../App.jsx";


const UserGrid = ({users, setUsers, setActiveToast}) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getUsers = async () => {
                try {
                    const res = await fetch(BASE_URL + '/friends')
                    const data = await res.json()

                    if(!res.ok){
                        throw new Error(data.message);
                    }
                    setUsers(data);
                } catch (error) {
                    console.error(error);

                }finally {
                    setIsLoading(false);
                }
        }
        getUsers();
    }, [setUsers]);
    console.log(users);

    return (
        <div className={'container flex flex-wrap justify-center gap-5 px-8 pb-8'}>
            {users.map(user => (
                <UserCard key={user.id} user={user} setUsers={setUsers} setActiveToast={setActiveToast}/>
            ))}
            {isLoading && <p>Loading...</p>}
            {!isLoading && users.length === 0 && <p className={'text-sm'}>🙁 No friends found</p>}
        </div>
        )
}
export default UserGrid;