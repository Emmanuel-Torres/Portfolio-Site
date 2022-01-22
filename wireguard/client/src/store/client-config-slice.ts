import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ClientConfig from "../models/clientConfig"

interface ClientConfigState {
    configs: ClientConfig[];
}

const initialState: ClientConfigState = {
    configs: []
}

// export const addConfig = createAsyncThunk(
//     'addConfig',
//     async(config: ClientConfig, thunkApi): Promise<ClientConfig[]> => {

//     }
// )

const clientConfigStore = createSlice({
    name: 'client-config',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
})