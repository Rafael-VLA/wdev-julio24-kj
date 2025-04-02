import { useContext } from "react";
import { UserContext } from "../context/user-context/UserContext";

export const useUserContext = () => {

    const state = useContext(UserContext);

    return {
        ...state
    }
}
