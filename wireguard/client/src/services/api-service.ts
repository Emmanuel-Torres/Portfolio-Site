import axios from "axios";
import ClientConfig from "../models/clientConfig";

const apiUrl = '/api';

const testUrl = async(): Promise<string> => {
    const res = await axios.get<string>(apiUrl);
    return res.data;
}

const addConfig = async (config: ClientConfig): Promise<ClientConfig> => {
    const res = await axios.post<ClientConfig>(apiUrl + '/addconfig', config);
    return res.data;
}

const apiService = {
    testUrl,
    addConfig
}

export default apiService;