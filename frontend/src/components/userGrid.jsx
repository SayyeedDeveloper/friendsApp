import UserCard from "./userCard.jsx";
import {useEffect, useState} from "react";


const UserGrid = ({users, setUsers}) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getUsers = async () => {
                try {
                    const res = await fetch('http://127.0.0.1:5000/friends')
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

    return (
        <div className={'container flex flex-wrap justify-center gap-5 px-8 pb-8'}>
            {users.map(user => (
                <UserCard key={user.id} user={user}/>
            ))}
            {isLoading && <p>Loading...</p>}
            {!isLoading && users.length === 0 && <p>No users found</p>}
        </div>
        )
}
export default UserGrid;