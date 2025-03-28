
import { useEffect, useState } from "react"
import { ListPosts } from "../components/ListPosts"
import { getPosts } from "../services/jsonPlaceHolderService"
import { Post } from "../interfaces/post"

export const HomePage = () => {

    const [posts, setPosts] = useState<Post[]>([])
    
    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data)
        })
    }, [])

    return (
        <div className="flex justify-center">
            <ListPosts posts={posts} />
        </div>
    )
}