import { FC, useState } from "react";
import { clsx } from 'clsx';
import { HiOutlineHandThumbUp } from "react-icons/hi2";

interface Props {
    increment: () => void;
    decrement: () => void;
}

export const LikeButton:FC<Props> = ({ increment, decrement }) => {
    const [liked, setLiked] = useState(false);

    // const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     console.log(e.target)
    // }

    const handleClick = () => {

        const flag = !liked;

        setLiked(flag) // true => false => true

        if(flag){
            increment()
        } else {
            decrement()
        }

    }
    
    return (
        <button onClick={handleClick} className={clsx('flex items-center gap-x-2 transition-colors hover:text-[#0766ff]', {
            "text-[#0766ff]": liked === true
        })}>
            <HiOutlineHandThumbUp className="size-6" />
            <span>Me gusta</span>
        </button>
    )
}
