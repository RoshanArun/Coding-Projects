import React, { createContext, PropsWithChildren, useState } from "react";

export interface AuthContext {
    loggedIn?: boolean;

    setLogin: (isAuthed: boolean) => void;
}

const Context = createContext<AuthContext>({
    loggedIn: undefined,

    setLogin: () => undefined
})

interface AuthProviderDef { }

type AuthProps = PropsWithChildren<AuthProviderDef>

const AuthProvider: React.FC<AuthProps> = ({ children }: AuthProps) => {
    const [login, setLoggedIn] = useState<boolean | undefined>(undefined)

    const setLogin = (isAuthed: boolean) => {
        setLoggedIn(isAuthed)
    }

    return (
        <Context.Provider value={{ loggedIn: login, setLogin }}>
            {children}
        </Context.Provider>
    )
}

export { AuthProvider, Context }