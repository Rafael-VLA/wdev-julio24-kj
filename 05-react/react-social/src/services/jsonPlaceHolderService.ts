import { apiJPH } from '../api/apiJPH'
import { Post } from '../interfaces/post';
import { User } from '../interfaces/user';

export const getPosts = async():Promise<Post[]> => {
    const { data } =  await apiJPH.get<Post[]>('/posts');

    return data;
}

export const getUsers = async():Promise<User[]> => {
    const { data } =  await apiJPH.get<User[]>('/users');

    return data;
}