import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ccba2aa8923f5155737f002c9229c3349256c929c1eced47eb66509def053c71'
  }
});
