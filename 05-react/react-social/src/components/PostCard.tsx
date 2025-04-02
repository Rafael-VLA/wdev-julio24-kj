import { HiOutlineHandThumbUp } from "react-icons/hi2"
import { LikeButton } from "./LikeButton"
import { FC, useState } from "react"
import clsx from "clsx";
import { Post } from "../interfaces/post";
import { NavLink } from "react-router";
import { useUserContext } from "../hooks/useUserContext";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
}

interface Props {
  post: Post
}

export const PostCard:FC<Props> = ({ post }) => {

  const { users } = useUserContext()
  
  const { body, id, title, userId } = post
  const [ count, setCount ] = useState(getRandomInt(1000));
  const [ showImage, setShowImage ] = useState(false);

  const user = users.find(user => user.id.toString() === userId?.toString())

  // useEffect(() => {
  //   setCount(getRandomInt(1000))
  // }, [])

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <div className="max-w-[680px] border border-black/10 md:rounded-lg shadow-sm bg-white">
            {/* Encabezado */}
            <div className="flex items-center px-4 pt-4 pb-2">
                <img
                    className="w-10 h-10 rounded-full mr-3"
                    src="https://picsum.photos/200/300"
                    alt="Noticias Repretel"
                />
                <div>
                    <NavLink to={`/user-profile/${userId}`} className="font-bold text-sm">{ user?.name }</NavLink>
                    <p className="text-xs text-gray-500">14 de marzo a la 1:20 p. m.</p>
                </div>
            </div>

            {/* Contenido */}

            <div className="overflow-hidden px-4 pb-4">
                <p className="text-gray-700 line-clamp-2">
                  { body }    
                </p>
            </div>

            {/* Imagen */}
            <div className="relative">

                <img
                    src={`https://picsum.photos/1200/12${id.toString().length === 1 ? `0${id}` : id }`}
                    alt={ title }
                    className={ clsx("w-full h-auto", { "hidden": showImage === false }) }
                    onLoad={() => {
                      setShowImage(true)
                    }}
                />

                {
                  showImage === false && (
                    <div className="pb-[100%] bg-gray-300 animate-pulse"></div>
                  )
                }

            </div>

            {/* Reacciones */}
            <div className="p-4">
                <div className="flex items-center gap-x-1">
                    <HiOutlineHandThumbUp className="size-6 bg-[#0766ff] text-white rounded-full p-1" />
                    <span className="text-gray-500">{ count }</span>
                </div>
            </div>

            <div className="px-4">
                <hr className="border-t border-black/20" />
            </div>


            {/* Acciones */}
            <div className="p-4">
                <LikeButton increment={increment} decrement={decrement} />
            </div>


        </div>	
  )
}
