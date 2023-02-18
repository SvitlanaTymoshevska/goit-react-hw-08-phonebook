import { useSelector } from "react-redux";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Header } from "components/AppBar/AppBar.styled";
import { selectAuthStatus } from "redux/auth/authSelectors";
import { AUTH_STATUS } from "constants/constants";

export const AppBar = () => {
    const authStatus = useSelector(selectAuthStatus);

    return (
        <Header>
            <Navigation />
            {authStatus === AUTH_STATUS.logIn ? <UserMenu /> : <AuthNav />}
        </Header>  
    );
};