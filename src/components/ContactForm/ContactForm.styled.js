import styled from '@emotion/styled';

export const Text = styled.p`
  margin-left: 130px;
  margin-top: 45px;
  font-family: 'Indie Flower', cursive;
  text-decoration-color: rgb(239, 186, 211);
  z-index: 2;
  color: black;
  text-shadow: 1px 1px 2px rgb(239, 186, 211);
  font-size: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 95px;
  font-family: 'Indie Flower', cursive;
  color: black;
  text-shadow: 1px 1px 2px rgb(239, 186, 211);
`;

export const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

export const InputName = styled.input`
  font-family: 'Indie Flower', cursive;
  color: black;
  font-size: 18px;
  width: 200px;
  height: 10px;
  padding: 10px;
  border: 3px solid rgb(239, 186, 211);
  border-radius: 4px;
  margin-bottom: 10px;
  outline: none;

  &::placeholder {
    font-size: 14px;
  }
`;

export const InputNumb = styled.input`
  font-family: 'Indie Flower', cursive;
  color: black;
  font-size: 18px;
  width: 200px;
  height: 10px;
  padding: 10px;
  border: 3px solid rgb(239, 186, 211);
  border-radius: 4px;
  outline: none;
  margin-bottom: 10px;

  &::placeholder {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin-left: 80px;
  margin-bottom: 30px;
  width: 50px;
  border: none;
  background-color: inherit;
`;
