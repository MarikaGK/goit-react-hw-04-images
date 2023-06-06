import axios from 'axios';

// const pixabay data
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34547571-9a733d7c1e3b0ef917f0b0722';

const getImagesByQuery = async (query, page, perPage) => {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.params = {
    key: `${API_KEY}`,
    q: `${query}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: page,
  };

  const response = await axios.get();

  return {
    response: response.data.hits,
    totalHits: response.data.totalHits,
  };
};

export default getImagesByQuery;
