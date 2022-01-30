import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import ClientConfig from "../models/clientConfig"
import apiService from "../services/api-service"

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
        return await apiService.addConfig(config);
    }
)

export const getStatus = createAsyncThunk(
    'getStatus',
    async (params, thunkApi): Promise<string> => {
        return await apiService.getStatus();
    }
)

export const getPeers = createAsyncThunk(
    'getPeers',
    async (params, thunkApi): Promise<string[]> => {
        return await apiService.getPeers();
    }
)

export const restartService = createAsyncThunk(
    'restartService',
    async (params, thunkApi): Promise<string> => {
        await apiService.restartService();
        return await apiService.getStatus();
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