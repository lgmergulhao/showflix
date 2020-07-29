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
  &:hover,
  &:focus {
    opacity: .5;
  }
  
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
