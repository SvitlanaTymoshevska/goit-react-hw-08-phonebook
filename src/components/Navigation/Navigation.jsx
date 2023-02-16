import { StyledNavLink } from "components/Navigation/Navigation.styled";

export const Navigation = () => {
    // const { isLoggedIn } = useAuth();

    return (
        <nav>
            <StyledNavLink to="/">
                Home
            </StyledNavLink>
            {/* {isLoggedIn && ( */}
                <StyledNavLink to="/contacts">
                    Contacts
                </StyledNavLink>
            {/* )} */}
        </nav>
    );
};