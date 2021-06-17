import axios from 'axios'

// axios.defaults.headers.common['Authorization'] =
//   'Bearer 21045573-d699147f44aaa00ba6588ddf4';

const fetch = ({searchValue='', page=1}) => {
  return axios.get(`https://pixabay.com/api/?q=${searchValue}&page=${page}&key=21045573-d699147f44aaa00ba6588ddf4&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits)
}

export default {fetch}