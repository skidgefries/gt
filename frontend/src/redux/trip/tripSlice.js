import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusStateEnum from "../../enums/statusStateEnum";

const initialState = {
  location: null,
  geoLocation: {},
  startDate: "",
  endDate: "", 
  noOfDays: 0,
  status: StatusStateEnum.IDLE,
  errorMsg: null,
  successMsg: null,
};

// export const placeOrder = createAsyncThunk("order/create", async (order) =>
//   orderService.placeOrder(order)
// );

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    reset: () => initialState,
    setTrip: (state, action) => {
      state.location = action.payload.location;
      state.geoLocation = action.payload.geoLocation;
      state.noOfDays = action.payload.noOfDays;
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
  },
  extraReducers: (builder) => {
    // builder
      // Add/Place Order
    //   .addCase(placeOrder.pending, (state, _action) => {
    //     state.status = StatusStateEnum.LOADING;
    //   })
    //   .addCase(placeOrder.fulfilled, (state, action) => {
    //     state.status = StatusStateEnum.SUCCESS;
    //     state.successMsg = action.payload.message;
    //   })
    //   .addCase(placeOrder.rejected, (state, action) => {
    //     state.status = StatusStateEnum.FAILED;
    //     state.errorMsg = action.error.message;
    //   });
  },
});
export const { reset,  setTrip } = tripSlice.actions;
export default tripSlice.reducer;