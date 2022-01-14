import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    console.log(user)
    const res = await publicRequest.post("http://localhost:5000/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};