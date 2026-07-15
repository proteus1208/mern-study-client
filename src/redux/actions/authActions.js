import axios from "axios";

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from "../constants/authConstants";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const { data } = await axios.post("/api/auth/login", {
            email,
            password,
        });

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response?.data?.message || err.message,
        });
    }
};