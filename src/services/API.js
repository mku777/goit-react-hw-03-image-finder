import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '30677985-a8441cd36152dd6647e9ae9a3';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  const params = {
    key: KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: pageSize,
  };

  return axios({ params }).then(response => response.data);
};
export default fetchImages;
