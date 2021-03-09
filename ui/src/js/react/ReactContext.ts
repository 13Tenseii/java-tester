import React from "react";
import SessionManager from "../component/auth/SessionManager";
import AppContext from "../AppContext";

export const ReactContext = React.createContext(
    new AppContext(new SessionManager())
);