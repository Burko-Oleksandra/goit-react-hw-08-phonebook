import styled from '@emotion/styled';

export const List = styled.ul`
  list-style-type: none;
  align-items: start;
  padding: 0;
  gap: 50px;
`;

export const Item = styled.li`
  display: flex;
  padding: 10px;
  width: 850px;
  align-items: center;
  border-radius: 16px;
  border: 3px solid #483d88;
  margin-top: 15px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: start;
`;

export const Text = styled.p`
  display: block;
  padding: 0;
  margin: 5px;
  font-size: 24px;
  font-weight: 500;
`;

export const Name = styled.p`
  display: block;
  padding: 0;
  margin: 5px;
  font-size: 28px;
  font-weight: 800;
`;

export const Button = styled.button`
  width: 250px;
  margin-left: auto;
  height: 50px;
  font-size: 24px;
  font-weight: 900;
  background-color: #e6e6fa;
  color: #483d8b;
  border-radius: 16px;
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
