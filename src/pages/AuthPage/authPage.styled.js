import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 40px;
  width: 500px;
  height: 500px;
  background-image: ${props => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
`;

export const Text = styled.p`
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-color: rgb(239, 186, 211);
  font-family: 'Indie Flower', cursive;
  text-shadow: 1px 1px 2px rgb(239, 186, 211);
  font-size: 32px;
  margin-top: 60px;
  /* margin-bottom: 200px; */
`;

export const Register = styled(Link)`
  font-family: 'Indie Flower', cursive;
  color: black;
  text-shadow: 1px 1px 2px rgb(239, 186, 211);
  font-size: 28px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  margin-left: 350px;
  margin-top: 50px;
  text-decoration: none;
`;

export const LogIn = styled(Link)`
  font-family: 'Indie Flower', cursive;
  text-shadow: 1px 1px 2px rgb(239, 186, 211);
  color: black;
  font-size: 28px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  margin-left: 350px;
  margin-top: 60px;
  text-decoration: none;
`;
