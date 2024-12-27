import {USERS} from "../dummy/lib.js";
import UserCard from "./userCard.jsx";


const UserGrid = () => {
    return (
        <div className={'container flex flex-wrap justify-center gap-2 px-8 pb-8'}>
            {USERS.map(user => (
                <UserCard key={user.id} user={user}/>
            ))}
        </div>
        )
}
export default UserGrid;