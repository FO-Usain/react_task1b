import React, { useReducer } from "react";
import MkdSDK from "../../utils/MkdSDK";
import { loggedIn, tokenExpireError } from "../actions/actionCreators/Auth";
import authReducer, { authInitialState } from "../reducers/AuthReducer";

export const AuthContext = React.createContext();

let sdk = new MkdSDK();

const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState);

    React.useEffect(() => {
        //TODO
        try {
            const response = sdk.check("admin");

            response.then(valid => {
                dispatch(loggedIn({
                    token: localStorage.getItem("token"),
                    role: localStorage.getItem("role")
                }))
            }).catch(error => {
                tokenExpireError(dispatch, error);
            }); 
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;