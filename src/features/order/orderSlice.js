import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  deliveryPrice: 0,
}

export const orderSlice = createSlice({
  name: 'Order',
  initialState,
  reducers: {
    setDeliveryPrice: (state, action) => {
      alert('From reducer: ' + JSON.stringify(action.payload));
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.deliveryPrice = 1200;
      alert('From reducer deliveryPrice: ' + JSON.stringify(state.deliveryPrice));
    },    
  },
})

// Action creators are generated for each case reducer function
export const { setDeliveryPrice } = orderSlice.actions

export default orderSlice.reducer