import { useDispatch } from "react-redux"
import user_types from "../redux/auth/types"


export default function CashierPage() {
    const dispatch = useDispatch()

    
  function logOut() {
    dispatch({
      type: user_types.USER_LOGOUT,
    });
    localStorage.clear();
    window.location.reload(true);
  }


    return(
        <h1 onClick={logOut}>CASHIER PAGE</h1>
    )
}