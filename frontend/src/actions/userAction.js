// import { USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../constants/userconstants"
// import { useDispatch } from "react-redux";
// import axios from "axios";
// // const dispatch = useDispatch();

// export const UpdateProfile = (user) => async (s= dispatch, getState) =>
// {
//     {/*exception handling in js */}
//     try {
//         dispatch ({type: USER_UPDATE_REQUEST});

//         const {
//             userLogin:{userInfo},
//         }=getState();

//         const config = {
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: 'Bearer ${userInfo.token}'
//             },
//         };
        
//         const {data}=await axios.post("/api/users/profile", user , config);

//         dispatch({ type: USER_UPDATE_SUCCESS , payload:data});

//         //dispatch ({ type: USER_LOGIN_SUCCESS, payload:data});

//         localStorage.setItem("userInfo", JSON.stringify(data));
//     }

//     catch(error)
//     {
//         dispatch({
//             type:USER_UPDATE_FAIL,
//             payload:
//              error.response && error.response.data.message 
//              ? error.response.data.message 
//              :error.message, 

        
//         })
//     }

    
// }