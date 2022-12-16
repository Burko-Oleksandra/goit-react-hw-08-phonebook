import styled from '@emotion/styled';

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  width: 255px;
  height: 380px;
  gap: 15px;
  font-family: 'Indie Flower', cursive;
  color: black;
  font-size: 18px;
  margin-left: 400px;
  margin-top: -20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px; /* ширина всей полосы прокрутки */
  }

  &::-webkit-scrollbar-track {
    border-radius: 6px;
    background: rgb(239, 186, 211); /* цвет зоны отслеживания */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(161, 99, 245); /* цвет бегунка */
    border-radius: 20px; /* округлось бегунка */
    border: 4px solid rgb(239, 186, 211); /* отступ вокруг бегунка */
  }
`;
