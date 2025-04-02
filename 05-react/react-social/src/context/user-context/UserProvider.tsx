import { FC, PropsWithChildren, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { User } from "../../interfaces/user";
import { getUsers } from "../../services/jsonPlaceHolderService";

export const UserProvider:FC<PropsWithChildren> = ({ children }) => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users)
        })
    }, [])

    return (
        <UserContext.Provider value={{ users }}>
            { children }
        </UserContext.Provider>
    )
}