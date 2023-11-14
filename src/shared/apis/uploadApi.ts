import axios from "axios";
import urls from "../constants/urls.ts";

export const uploadFile = async (file: File | null) => {
  if (!file) {
    return;
  }

  const formData = new FormData();
  formData.append("files", file);

  const result = await axios.post(urls.UPLOAD, formData);

  console.log(result);

  return result.data[0].id;
};
