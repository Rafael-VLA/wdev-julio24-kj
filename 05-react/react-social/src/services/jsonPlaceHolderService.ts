import { apiJPH } from '../api/apiJPH'
import { Post } from '../interfaces/post';

export const getPosts = async():Promise<Post[]> => {
    const { data } =  await apiJPH.get<Post[]>('/posts');

    return data;
}