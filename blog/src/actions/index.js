import axios from 'axios';

export const FETCH_POSTS = "fetchPosts";
export const CREATE_POSTS = "createPosts";

const ROOT_URL = "http://reduxblog.herokuapp.com/api/";
const API_KEY = "?key=rosnovsky";

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values) {
    const request = axios.post(`${ROOT_URL}posts/${API_KEY}`, values);

    return {
        type: CREATE_POST,
        payload: request
    };
}