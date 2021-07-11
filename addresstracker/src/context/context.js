import { createContext } from "react";

const AppContext = createContext({
    datas: [],
    setToDatas: () => {},
})

export default AppContext