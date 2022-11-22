import styled from '@emotion/styled';

export const List = styled.ul`
  list-style-type: none;
  align-items: start;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  padding: 0;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  display: block;
  font-size: 32px;
  font-weight: 500;
`;

export const Button = styled.button`
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
