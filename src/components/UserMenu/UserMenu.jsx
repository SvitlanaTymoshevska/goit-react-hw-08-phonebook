// import { useDispatch } from "react-redux";
import { Wrapper, Username } from "components/UserMenu/UserMenu.styled";

export const UserMenu = () => {
    // const dispatch = useDispatch();

    return (
        <Wrapper>
            <Username>Welcom </Username>
            <button type="button">
                Logout
            </button>
        </Wrapper>
    );
};

