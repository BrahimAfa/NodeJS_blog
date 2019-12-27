import axios from 'axios';
const URL_API = 'http://localhost:3030'

export const PostArticle = async (data) => {
    try {
        const result = await axios.post(`${URL_API}/api/articles/add`, data);
        console.log("article post api", result);
        return true;
    } catch (err) {
        console.log("Error Showed in article post api", err);
    }
    return false;
}

export const getArticles = async () => {
    try {

        //  const resu  lt = await axios.get(`${URL_API}/api/articles`);
        const result = await axios.get(`${URL_API}/api/articles`);
        return result.data;
    } catch (err) {
        console.log("Error Showed in article get api", err);
    }
    return [];
}

export const getArticle = async (id) => {

    const result = await axios.get(`${URL_API}/api/articles/${id}`);
    return result.data;

}
export const PostComment = async (data,id) => {
    try {
        console.log(data);

        const result = await axios.post(`${URL_API}/api/articles/${id}/comments`, data);
        return result.data;
    } catch (err) {
        //handle the error
        console.log("Error Showed in article get api", err);
    }
    return [];
}