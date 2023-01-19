import React, { useReducer } from "react";
import globalReducer, { globalInitialState } from "../reducers/GlobalReducer";

export const GlobalContext = React.createContext();

const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(globalReducer, globalInitialState);

    return (
        <GlobalContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
 
export default GlobalProvider;