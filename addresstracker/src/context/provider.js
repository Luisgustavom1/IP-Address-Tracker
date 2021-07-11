import { useContext, useState } from "react";
import AppContext from "./context";

export default function AppProvider({children}){
    const [datas, setDatas] = useState([])
    function setToDatas(value) {
        setDatas(value)
    }
    return(
        <AppContext.Provider value={{datas, setToDatas}}>
            {children}
        </AppContext.Provider>
    )
}