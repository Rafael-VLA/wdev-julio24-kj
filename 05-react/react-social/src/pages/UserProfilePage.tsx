
import { useParams, useNavigate } from "react-router"
import { useUserContext } from "../hooks/useUserContext";

export const UserProfilePage = () => {
    const { id } = useParams();
    const { users } = useUserContext()
    const navigate = useNavigate();
    
    const currentUser = users.find(user => user.id.toString() === id?.toString())

    if(currentUser === undefined){
        navigate("/") // Redirrecionar al home
    }

    // useEffect(() => {
        // fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        //     .then(res => {

        //         if(!res.ok){ // Si existe un error
        //             navigate("/")
        //         }

        //         return res.json();
        //     })
        //     .then(user => {
        //         console.log(user)
        //     })
    // })

    return (
        <div>
            <h1>User Profile: { id }</h1>

            <pre>{ JSON.stringify(currentUser, null, 2) }</pre>
        </div>
    )
    
}