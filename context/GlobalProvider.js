import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = {{children }} => {
const [isLoggedIn, setIsLoggedIn ] = useState(second);
const [user, setUser] = useState(null);
const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
    fetchUser();
}, []);

    return (
        <GlobalContext.Provider value={{

        }}>
            {children}
        </GlobalContext.Provider>
    )
}

