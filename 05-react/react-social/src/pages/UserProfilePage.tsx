import { useEffect } from "react";
import { useParams, useNavigate } from "react-router"

export const UserProfilePage = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {

                if(!res.ok){ // Si existe un error
                    navigate("/")
                }

                return res.json();
            })
            .then(user => {
                console.log(user)
            })
    })

    return (
        <div className="">
            <h1>User Profile: { id }</h1>
        </div>
    )
    
}