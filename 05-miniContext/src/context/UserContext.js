// everything will be in pure JavaScript, that's why a JS file

import React from "react";

const UserContext = React.createContext();
// createContext() creates an object like a global variable that allows the sharing of data between components.

export default UserContext;

//all the components inside of UserContext tag will have the access to the context which was created thorugh React.createContext()
{/* <UserContext>
    <Login/>
    <Card>
        <Data/>
    </Card>
</UserContext> */}