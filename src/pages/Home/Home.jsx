import Minion from "pages/Home/minion.gif";
import { Wrapper, Title } from "pages/Home/Home.styled";

const Home = () => {
    return (
        <Wrapper>
            <Title>
                Welcome to your phone book!
            </Title>
            <img src={Minion} alt="Joyful Minion" />  
        </Wrapper>
    );
};

export default Home;