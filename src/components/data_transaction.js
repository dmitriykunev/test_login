import axios from 'axios';

const URL = 'http://localhost:3001';

class DataTransaction {
   login(payload) {
        return axios.post(URL + '/login', payload);
    }
   register(payload) {
        return axios.put(URL + '/register', payload);
   }
   token(payload) {
       return axios.post(URL + '/token', payload);
   }
   getUsers() {
       return axios.get(URL + '/getUsers');
   }
}

export default new DataTransaction();