import axios from "axios";
import urls from "../constants/urls";

export const createCar = (data) =>
    axios.post(urls.CARS, { data });

export const getCars = async () => {
    const response = await axios.get(urls.CARS);
    return response.data.data.map(item => ({
        id: item.id,
        ...item.attributes,
    }));
}