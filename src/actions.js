import axios from "axios";
import { GET_USERS } from "./dataReducer";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://iunaptk810.execute-api.ap-southeast-1.amazonaws.com/dev/api/users"
    );

    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};
