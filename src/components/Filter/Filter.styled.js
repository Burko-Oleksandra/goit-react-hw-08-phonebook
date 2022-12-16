import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 95px;
  font-family: 'Indie Flower', cursive;
  color: black;
  text-shadow: 1px 1px 2px rgb(239, 186, 211);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  margin-left: 95px;
  margin-bottom: 20px;
`;

export const InputFilter = styled.input`
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
    text-decoration: none;
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 42px;
  left: 280px;
  background-color: inherit;
  width: 45px;
  border: none;
`;
