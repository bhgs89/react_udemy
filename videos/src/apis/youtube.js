import axios from 'axios';

const KEY = 'AIzaSyAO_vb69sLEdoTxk_sCcpp1LmYcpR7j_ao';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
