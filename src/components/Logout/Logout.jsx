import "./Logout.css";
import { AuthContext } from "../../stateManagement/contexts/AuthContext";
import { useContext } from "react";
import { loggedOut } from "../../stateManagement/actions/actionCreators/Auth";

const Logout = () => {

    const { dispatch } = useContext(AuthContext);

    return (
        <div
            className="logoutBtn"
            onClick={() => dispatch(loggedOut())}
        >
            <span className="adminFrame"><img src="/media/images/admin.png" alt="" /></span>
            <p className="logoutText">Logout</p>
        </div>
    );
}

export default Logout;