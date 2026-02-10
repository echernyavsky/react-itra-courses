import { getFilms } from "../../../shared/apis/filmApi";

const load = async () => {
  const films = await getFilms();
  return { films };
};

export default load;
