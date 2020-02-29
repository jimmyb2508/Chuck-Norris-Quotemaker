
import axios from 'axios';

export default {
  getRandomQuotes: (num, firstName, lastName) => {
    return axios.get(`http://api.icndb.com/jokes/random/${num}?firstName=${firstName}&lastName=${lastName}`);
  }
}