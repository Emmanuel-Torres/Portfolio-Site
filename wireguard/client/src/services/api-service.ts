import axios from "axios";

const apiUrl = '/api/';

const testUrl = async(): Promise<string> => {
    const res = await axios.get<string>(apiUrl);
    return res.data;
}

const apiService = {
    testUrl
}

export default apiService;