import styled from "styled-components";

export const TweetsComponentListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const TweetsComponentListMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 196px;

  background: #ebd8ff;
  color: #373737;

  border-radius: 10%;
  cursor: pointer;

  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #00000040;

  &:hover {
    background: #5cd3a8 !important;
  }
`;
