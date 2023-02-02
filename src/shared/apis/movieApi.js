import axios from "axios";
import urls from "../constants/urls";

export const createMovie = (data) =>
    axios.post(urls.MOVIES, data);

export const getMovies = async () => {
    const response = await axios.get(urls.MOVIES);
    return response.data;
}