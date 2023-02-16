import { StyledNavLink } from "components/AuthNav/AuthNav.styled";

export const AuthNav = () => {
  return (
    <div>
      <StyledNavLink to="/register">
        Register
      </StyledNavLink>
      <StyledNavLink to="/login">
        Log in
      </StyledNavLink>
    </div>
  );
};