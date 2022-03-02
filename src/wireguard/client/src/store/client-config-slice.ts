import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import ClientConfig from "../models/clientConfig"
import wireguardApiService from "../services/wireguard-api-service"

interface ClientConfigState {
    configs: Blob[];
    peers: string[];
    wg_status: string;
}

const initialState: ClientConfigState = {
    configs: [],
    peers: [],
    wg_status: "unactive"
}

export const addConfig = createAsyncThunk(
    'addConfig',
    async (config: ClientConfig, thunkApi): Promise<Blob> => {
        return await wireguardApiService.addConfig(config);
    }
)

export const getStatus = createAsyncThunk(
    'getStatus',
    async (params, thunkApi): Promise<string> => {
        return await wireguardApiService.getStatus();
    }
)

export const getPeers = createAsyncThunk(
    'getPeers',
    async (params, thunkApi): Promise<string[]> => {
        return await wireguardApiService.getPeers();
    }
)

export const removePeer = createAsyncThunk(
    'removePeer',
    async (peerPublicKey: string, thunkApi) => {
        await wireguardApiService.removePeer(peerPublicKey)
    }
)

export const restartService = createAsyncThunk(
    'restartService',
    async (params, thunkApi): Promise<string> => {
        await wireguardApiService.restartService();
        return await wireguardApiService.getStatus();
    }
)
const clientConfigSlice = createSlice({
    name: 'client-config',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(addConfig.fulfilled, (state, action: PayloadAction<Blob>) => {
                state.configs.push(action.payload);
            })
            .addCase(getPeers.fulfilled, (state, action: PayloadAction<string[]>) => {
                state.peers = action.payload;
            })
            .addCase(getStatus.fulfilled, (state, action: PayloadAction<string>) => {
                state.wg_status = action.payload;
            })
            .addCase(restartService.fulfilled, (state, action: PayloadAction<string>) => {
                state.wg_status = action.payload;
            })
    }
})

export default clientConfigSlice;