import axios from "axios";
import urls from "../constants/urls";

export const createNewAirTravel = (data) =>
    axios.post(urls.AIR_TRAVELS, { data });

export const getAirTravels = async () => {
    const response = await axios.get(urls.AIR_TRAVELS);
    return response.data;
}