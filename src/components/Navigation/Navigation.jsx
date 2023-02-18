import { useSelector } from "react-redux";
import { selectAuthStatus } from "redux/auth/authSelectors";
import { AUTH_STATUS } from "constants/constants";
import { StyledNavLink } from "components/Navigation/Navigation.styled";

export const Navigation = () => {
    const authStatus = useSelector(selectAuthStatus);

    return (
        <nav>
            <StyledNavLink to="/">
                Home
            </StyledNavLink>
            {authStatus === AUTH_STATUS.logIn && (
                <StyledNavLink to="/contacts">
                    Contacts
                </StyledNavLink>
            )}
        </nav>
    );
};