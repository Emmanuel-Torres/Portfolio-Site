import axios from "axios";
import fileDownload from "js-file-download";
import ClientConfig from "../models/clientConfig";

const apiUrl = '/api';

const testUrl = async (): Promise<string> => {
    const res = await axios.get<string>(apiUrl);
    return res.data;
}

const addConfig = async (config: ClientConfig) => {
    const res = await axios.post(apiUrl + '/addconfig', config, { responseType: 'blob' });
    fileDownload(res.data, 'configuration.conf');
}

const getStatus = async (): Promise<string> => {
    const res = await axios.get<string>(apiUrl + '/wgservice/status');
    return res.data;
}

const restartService = async () => {
    const res = await axios.get(apiUrl + '/wgservice/restart');
}

const apiService = {
    testUrl,
    addConfig,
    getStatus,
    restartService
}

export default apiService;