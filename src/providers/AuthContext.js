import React from "react";

export const AuthContext = React.createContext({
    doLogin: () => {},
    doLogout: () => {},
    token: undefined
});