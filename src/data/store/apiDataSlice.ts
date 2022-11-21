import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppConfig } from '../config';

export interface ApiDataState {
  value: Array<Object>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ApiDataState = {
  value: [],
  status: 'idle',
};

export const loadApiData = createAsyncThunk(
  'apiData/loadApiData',
  async () => {
    const response = await fetch(AppConfig.apiUrl);
    const data = await response.json();
    return data.map((item: any) => {
      return {
        name: item["name"],
        webPages: item["web_pages"],
        domains: item["domains"],
        country: item["country"],
      };
    })
  }
);

export const apiDataSlice = createSlice({
  name: 'apiData',
  initialState,
  reducers: {
    addItemToData: (state) => {
      state.value.push(state.value[0]);
    },
    deleteItemFromData: (state) => {
      state.value.pop();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadApiData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadApiData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(loadApiData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addItemToData, deleteItemFromData } = apiDataSlice.actions;
export const getApiData = (state: { apiData: ApiDataState }) => state.apiData.value;
export default apiDataSlice.reducer;
