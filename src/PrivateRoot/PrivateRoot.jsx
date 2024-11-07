import { useContext, useEffect } from "react"
import { userStatusContext } from "../AuthContext/AuthContext"
import { useLocation, useNavigate } from "react-router-dom";







const PrivateRoot = ({ children }) => {
    const {user, setRedirectPath} = useContext(userStatusContext);
    const navigation = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (user === undefined) {
            setRedirectPath(location.pathname);
            return navigation('/login');
        }
    }, [user])



    return (
        <>
            {children}
        </>
    )
}
export default PrivateRoot