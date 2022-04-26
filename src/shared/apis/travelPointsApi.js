import axios from "axios";
import urls from "../constants/urls";

export const getTravelPoints = () =>
    axios.get(urls.TRAVEL_POINTS.ROOT);

export const createTravelPoint = (travelPoint) => {
    axios.post(urls.TRAVEL_POINTS.ROOT, { data: travelPoint });
}
