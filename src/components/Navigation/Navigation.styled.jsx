import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: inherit;
    
    &:hover {
        color: green;
    }

    &.active{
        color: white;
        background-color: green;
        border-radius: 4px;
    }
`;