import axios from "axios";
import fileDownload from "js-file-download";
import ClientConfig from "../models/clientConfig";

const apiUrl = '/api';

const testUrl = async (): Promise<string> => {
    const res = await axios.get<string>(apiUrl);
    return res.data;
}

const addConfig = async (config: ClientConfig): Promise<Blob> => {
    const res = await axios.post<Blob>(apiUrl + '/addconfig', config, { responseType: 'blob' });
    fileDownload(res.data, 'configuration.conf');
    return res.data;
}

const getStatus = async (): Promise<string> => {
    const res = await axios.get<string>(apiUrl + '/wgservice/status');
    return res.data;
}

const restartService = async () => {
    const res = await axios.get(apiUrl + '/wgservice/restart');
}

const getPeers = async (): Promise<string[]> => {
    const res = await axios.get<string[]>(apiUrl + '/wgservice/peers');
    return res.data;
}

const removePeer = async (publicKey: string) => {
    console.log(publicKey);
    const res = await axios.post(apiUrl + '/wgservice/removeconfig', { publicKey });
}

const apiService = {
    testUrl,
    addConfig,
    getStatus,
    restartService,
    getPeers,
    removePeer
}

export default apiService;