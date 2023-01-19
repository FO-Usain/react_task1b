import { LOGIN, LOGIN_FAIL, LOGIN_START, LOGOUT } from "../actionTypes/Auth";

export const loginStart = () => {
    return {
        type: LOGIN_START
    };
}

export const loginFail = (errorMsg) => {
    return {
        type: LOGIN_FAIL,
        errorMsg: errorMsg
    }
}

export const loggedIn = (response) => {

    localStorage.setItem("token", response.token);
    localStorage.setItem("role", response.role);

    return {
        type: LOGIN,
        token: response.token,
        role: response.role,
    }
}

export const loggedOut = () => {
    return {
        type: LOGOUT
    }
}

export const tokenExpireError = (dispatch, errorMessage) => {
    const role = localStorage.getItem("role");

    if (errorMessage === "TOKEN_EXPIRED") {
        dispatch(loggedOut());
        window.location.href = "/" + role + "/login";
    }
};