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
    async(config: ClientConfig, thunkApi): Promise<ClientConfig> => {
        return await apiService.addConfig(config);
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
    }
})

export default clientConfigSlice;