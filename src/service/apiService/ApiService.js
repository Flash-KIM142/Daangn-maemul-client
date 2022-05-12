import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/v1/notice/";
const MaemulService = {

    getAll: async () => {
        return axios.get(BASE_URL + "home");
    },
    createNotice: async (data) => {
        return axios.post(BASE_URL, data);
    }
    
}

export default MaemulService;
