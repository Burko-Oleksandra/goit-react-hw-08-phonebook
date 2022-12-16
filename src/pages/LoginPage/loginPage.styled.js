import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background-image: ${props => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 140px;
  font-family: 'Indie Flower', cursive;
  color: black;
  text-shadow: 1px 1px 2px rgb(239, 186, 211);
`;

export const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
`;

export const InputEmail = styled.input`
  font-family: 'Indie Flower', cursive;
  color: black;
  font-size: 18px;
  width: 200px;
  height: 10px;
  padding: 10px;
  border: 3px solid rgb(239, 186, 211);
  border-radius: 4px;
  margin-bottom: 30px;
  outline: none;

  &::placeholder {
    font-size: 14px;
  }
`;

export const InputPass = styled.input`
  font-family: 'Indie Flower', cursive;
  color: black;
  font-size: 18px;
  width: 200px;
  height: 10px;
  padding: 10px;
  border: 3px solid rgb(239, 186, 211);
  border-radius: 4px;
  outline: none;

  &::placeholder {
    font-size: 14px;
  }
`;

export const ButtonLog = styled.button`
  cursor: pointer;
  position: absolute;
  top: 254px;
  left: 390px;
  font-family: 'Indie Flower', cursive;
  text-shadow: 1px 1px 2px rgb(239, 186, 211);
  padding: 0;
  box-sizing: content-box;
  min-width: 70px;
  font-size: 28px;
  background-color: inherit;
  transform: rotate(270deg);
  border: none;
`;

export const ButtonLogTrue = styled.button`
  color: black;
`;

export const ButtonLogFalse = styled.button`
  color: gray;
`;

export const ButtonBack = styled.button`
  cursor: pointer;
  font-family: 'Indie Flower', cursive;
  position: absolute;
  top: 425px;
  left: 398px;
  text-shadow: 1px 1px 2px rgb(239, 186, 211);
  color: black;
  padding: 0;
  width: 70px;
  font-size: 28px;
  transform: rotate(270deg);
  border: none;
  background-color: rgba(161, 99, 245, 0);
`;
