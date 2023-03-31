import axios from "axios";
import urls from "../constants/urls";

export const createMovie = (data) =>
    axios.post(urls.MOVIES, { data });

export const getMovies = async () => {
    const { data } = await axios.get(urls.MOVIES);
    return data.data.map(movie => ({
        ...movie.attributes,
        id: movie.id,
    }));
}