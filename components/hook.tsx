import { useContext } from "react";
import { AuthContext, Context } from "./State";


const useAuth = (): AuthContext => useContext(Context)

export default useAuth