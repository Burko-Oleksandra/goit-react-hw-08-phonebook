import styled from '@emotion/styled';

export const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  width: 712px;
  height: 482px;
`;

export const LoaderWrap = styled.div`
  position: absolute;
  top: 200px;
  left: 320px;
  display: flex;
  width: 200px;
`;
