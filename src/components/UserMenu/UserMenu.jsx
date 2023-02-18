import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Username, Button } from "components/UserMenu/UserMenu.styled";
import { logOut } from "redux/auth/authThunk";
import { selectUser } from "redux/auth/authSelectors";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <Wrapper>
            <Username>Welcome, {user.name}</Username>
            <Button type="button" onClick={() => dispatch(logOut())}>
                Logout
            </Button>
        </Wrapper>
    );
};

