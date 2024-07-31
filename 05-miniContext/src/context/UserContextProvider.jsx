import React, { useState } from "react";
import UserContext from "./UserContext";

//here, children prop is a generic name that does the purpose of passing to the function whatever it is receiving
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;