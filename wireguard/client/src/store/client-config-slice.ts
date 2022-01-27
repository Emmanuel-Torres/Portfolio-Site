import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import ClientConfig from "../models/clientConfig"
import apiService from "../services/api-service"

interface ClientConfigState {
    configs: ClientConfig[];
    wg_status: string;
}

const initialState: ClientConfigState = {
    configs: [],
    wg_status: "unactive"
}

export const addConfig = createAsyncThunk(
    'addConfig',
    async (config: ClientConfig, thunkApi): Promise<ClientConfig> => {
        return await apiService.addConfig(config);
    }
)

export const getStatus = createAsyncThunk(
    'getStatus',
    async (params, thunkApi): Promise<string> => {
        return await apiService.getStatus();
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
            .addCase(addConfig.fulfilled, (state, action: PayloadAction<ClientConfig>) => {
                state.configs.push(action.payload);
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