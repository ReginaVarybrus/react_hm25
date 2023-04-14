import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const AuthProvider = (props) => {
    const [token, setToken] = useState();

    useEffect(() => {
        console.log('Login ---', localStorage.getItem('token'));
        setToken(localStorage.getItem('token'));
        if (localStorage.getItem('token')) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        }
    }, [token]);

    const doLogin = async (user) => {
        try {
            const token = await axios.post('login', { user });
            localStorage.setItem('token', token.data.token);
            setToken(token.data.token);
        } catch (err) {
            console.log(err);
        }

    };

    const doLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
    }

    const getContextValue = () => {
        return {
            doLogin,
            doLogout,
            token
        }
    };

    return <AuthContext.Provider value={getContextValue()}>
        {token ? props.children[1] : props.children[0]}
    </AuthContext.Provider>
}

export default AuthProvider;