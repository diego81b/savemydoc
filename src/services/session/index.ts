import React from 'react';
 
const AuthUserContext = React.createContext<firebase.User | null | undefined>(null);

export { AuthUserContext };
