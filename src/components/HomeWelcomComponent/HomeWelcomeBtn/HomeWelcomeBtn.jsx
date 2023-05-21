import { useNavigate } from "react-router-dom";
import { HomeWelcomeBtnStyled } from "./HomeWelcomeBtn.styled";

export const HomeWelcomeBtn = () => {
  const navigate = useNavigate();
  return (
    <>
      <HomeWelcomeBtnStyled onClick={() => navigate("/tweets")}>
        See your followers
      </HomeWelcomeBtnStyled>
    </>
  );
};
