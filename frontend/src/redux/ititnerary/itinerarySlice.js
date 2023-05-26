import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusStateEnum from "../../enums/statusStateEnum";

const initialState = {
itinerary: [],
  status: StatusStateEnum.IDLE,
  errorMsg: null,
  successMsg: null,
};

// export const placeOrder = createAsyncThunk("order/create", async (order) =>
//   orderService.placeOrder(order)
// );

const itinerarySlice = createSlice({
  name: "itinerary",
  initialState,
  reducers: {
    reset: () => initialState,
    setItinerary: (state, action) => {
        console.log("No. of days", action.payload)
        for (let i = 0; i < action.payload; i++) {
            state.itinerary.push([{lat: 0, lng: 0}]);
          }
    },
    setItinerary2: (state, action) => {
        console.log("fs 2", action.payload)
            state.itinerary[action.payload.index].push(action.payload.geoLocation);

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
export const { reset,  setItinerary , setItinerary2} = itinerarySlice.actions;
export default itinerarySlice.reducer;