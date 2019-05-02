import axios from 'axios';

class DataTransaction {
   login(payload) {
        return axios.post('http://localhost:3001/login', payload);
    }
   register(payload) {
        return axios.put('http://localhost:3001/register', payload);
   }
   token(payload) {
       return axios.post('http://localhost:3001/token', payload);
   }
}

export default new DataTransaction();