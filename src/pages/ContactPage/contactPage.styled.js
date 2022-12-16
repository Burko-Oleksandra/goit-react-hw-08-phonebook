import styled from '@emotion/styled';

export const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 715px;
  height: 480px;
  background-image: ${props => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
`;

export const Text = styled.p`
  margin-left: 425px;
  margin-top: -415px;
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-color: rgb(239, 186, 211);
  font-family: 'Indie Flower', cursive;
  text-shadow: 1px 1px 2px rgb(239, 186, 211);
  font-size: 32px;
`;
