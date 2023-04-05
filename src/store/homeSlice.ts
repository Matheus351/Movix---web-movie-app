import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//   value: number
// }

// const initialState: CounterState = {
//   value: 0,
// }

export const homeSlice = createSlice({
  name: 'home',
  initialState:{
    url:{},
    genres:{}
  },
  reducers: {
    getApiConfiguration:(state,action) => {
        state.url = action.payload
    },
    getGenres:(state,action) => {
        state.genres = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions

export default homeSlice.reducer