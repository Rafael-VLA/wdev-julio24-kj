import { FC } from "react";
import { Post } from "../interfaces/post";
import { PostCard } from "./PostCard"

interface Props {
    posts?: Post[];
}

export const ListPosts:FC<Props> = ({ posts = [] }) => {
    // const fruits = ["manzana", "piña", "uva"];

    return (
        <div className="flex flex-col gap-4">
            
            {/* {
                fruits.map((fruit) => (
                    <p key={fruit}>{ fruit }</p>
                ))
            } */}

            {
                posts.map((post) => (
                    <PostCard post={post} key={post.id}/>
                ))
            }

            {/* <PostCard /> */}
        </div>
    )
}
