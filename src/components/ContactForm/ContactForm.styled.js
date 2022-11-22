import styled from '@emotion/styled';

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  font-size: 24px;
  font-weight: 500;
`;

export const Input = styled.input`
  margin-top: 10px;
  width: 680px;
  height: 40px;
  font-size: 24px;
  background-color: #e6e6fa;
  border-radius: 16px;
  border: 5px solid #483d88;
  outline: none;
  padding: 5px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto;
  width: 250px;
  height: 50px;
  font-size: 24px;
  font-weight: 900;
  border-radius: 16px;
  background-color: #e6e6fa;
  color: #483d8b;
  border: 5px solid #483d8b;
  cursor: pointer;
  box-shadow: inset rgba(72, 61, 139, 0.6) 0 -3px 8px,
    inset rgba(72, 61, 139, 0.7) 0 3px 8px,
    rgba(72, 61, 139, 0.8) 0 3px 8px -3px;

  &:hover,
  &:focus {
    box-shadow: inset 2px 2px 5px rgba(72, 61, 139, 0.5),
      1px 1px 5px rgba(72, 61, 139, 1);
  }
`;
