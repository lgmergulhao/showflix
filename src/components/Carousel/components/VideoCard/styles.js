import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 0px solid;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 400px;
  width: 400px;
  height: 250px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 0;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity .3s;

  /* &:hover,
  &:focus {
    opacity: .25;
  } */
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const VideoCardContainerTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 6px 12px;
`;

export const WatchButton = styled.button`
  position: absolute;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
  cursor: pointer;
  font-size: 80px;
  opacity: 0;
  border: 0 solid transparent;
  color: var(--white);
  background: transparent;
  transition: opacity .3s;
`;