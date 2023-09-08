import axios from "axios";
import urls from "../constants/urls.js";

export const getTemplates = async () => {
    const response = await axios.get(urls.EMAIL_TEMPLATES);
    return response.data;
}

export const createTemplate = (template) =>
    axios.post(urls.EMAIL_TEMPLATES, { data: template });