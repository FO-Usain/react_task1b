import { LOGIN, LOGIN_FAIL, LOGIN_START, LOGOUT } from "../actions/actionTypes/Auth";

export const authInitialState = {
    loggingIn: false,
    errorMsg: null,
    isAuthenticated: false,
    user: null,
    token: null,
    role: null,
}

const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                errorMsg: null,
                isAuthenticated: false
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loggingIn: false,
                errorMsg: action.errorMsg,
                isAuthenticated: false
            }
        case LOGIN:
            //TODO
            return {
                ...state,
                loggingIn: false,
                errorMsg: null,
                isAuthenticated: true,
                token: action.token,
                role: action.role,
            };
        case LOGOUT:
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                role: null,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;