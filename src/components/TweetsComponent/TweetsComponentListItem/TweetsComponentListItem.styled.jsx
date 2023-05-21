import styled from "styled-components";

export const ListItemCardStyled = styled.div`
  position: relative;
  width: 380px;
  height: 424px;
  display: flex;
  color: #ebd8ff;
  padding-bottom: 36px;
  gap: 14px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  &::after {
    content: " ";
    position: absolute;
    top: 40%;
    width: 97%;
    border: 5px solid #ebd8ff;
    box-shadow: 0px 4.391631126403809px 3.2937235832214355px 0px #fbf8ff inset,
      0px 4.391631126403809px 4.391631126403809px 0px #0000000f,
      0px -2.1958155632019043px 4.391631126403809px 0px #ae7be3 inset;
  }
`;

export const ListItemCardAvatar = styled.div`
  z-index: 10;
  display: flex;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #d9d9d9;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  border: 5px solid #ebd8ff;
  box-shadow: 0px 4.391631126403809px 3.2937235832214355px 0px #fbf8ff inset,
    0px 4.391631126403809px 4.391631126403809px 0px #0000000f,
    0px -2.1958155632019043px 4.391631126403809px 0px #ae7be3 inset;
  background-position: 50% 50%;
  background-size: cover;
`;

export const ListItemCardBtn = styled.button`
  margin-top: 10px;
  width: 196px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #373737;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #00000040;
  background: #ebd8ff;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  &:hover {
    background: #5cd3a8 !important;
  }
`;

export const CardImage = styled.img`
  width: 308px;
  height: 168px;
  position: absolute;
  top: 8px;
`;

export const CardLogoImage = styled.img`
  height: 22px;
  width: 76px;
  top: 20px;
  left: 20px;
  position: absolute;
`;
