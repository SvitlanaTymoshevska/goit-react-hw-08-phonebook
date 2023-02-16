import { Navigation } from "components/Navigation/Navigation";
// import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Header } from "components/AppBar/AppBar.styled";

export const AppBar = () => {
    return (
        <Header>
            <Navigation />
            <AuthNav />
        </Header>  
    );
};