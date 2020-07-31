import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Text = styled.div`
  min-width: 100%;
  display: block;
  margin-bottom: 0;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Video = styled.div`
  max-width: 600px;
  display: block;
  margin-top: 30px;

  @media (max-width: 800px) {
    width: 100%;
    max-width: none;
  }
`;

ContentAreaContainer.Category = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block; 
  padding: 25px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;

ContentAreaContainer.Description = styled.p`
  width: 50%;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 800px) {
    width: 100%;
    font-size: 16px;
    text-align: center;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 100px;
  line-height: 1;
  margin-top: 0;

  @media (max-width: 800px) {
    font-size: 50px;
    text-align: center;
  }
`;

export const BannerMainContainer = styled.section`
  height: 80vh;
  position: relative;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const WatchButton = styled.button`
  cursor: pointer;
  font-size: 100px;
  outline: none;
  border: 0 solid transparent;
  color: var(--white);
  background: transparent;
  margin: 30px auto 0;
  opacity: .8;
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`;