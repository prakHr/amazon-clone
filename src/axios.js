import axios from "axios";
const instance = axios.create({
    baseURL:'http://localhost:5001/challenge-2abc3/us-central1/api'
});
export default instance;