import Cookies from "js-cookie";

export const userAuth = () => {

    const user = Cookies.get("Token");

    if (user)  {
        return true;
    } else {
        return false;
    }
}