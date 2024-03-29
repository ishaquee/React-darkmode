import React ,{ createContext,useEffect,useState  } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = () => {
        setCurrentUser({
            id:1,
            name:"Mohamed",
            profilePic:"https://wallpaperaccess.com/full/2195035.jpg"});
        }

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser])

    return(
        <AuthContext.Provider value={{currentUser,login}}>
            {children}
        </AuthContext.Provider>
    )
}