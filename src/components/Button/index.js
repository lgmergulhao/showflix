import styled from 'styled-components';

const Button = styled.button`
  text-decoration: none;
  background: none;
  border: 0;
  padding: 16px 24px;
   
  box-shadow: inset 0 0 0 2px var(--white);
  color: var(--white);
  font-size: inherit;
  font-weight: 700;

  position: relative;
  vertical-align: middle;
  transition: color 0.25s;

  &::before,
  &::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &::before,
  &::after {
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
  }

  &:hover {
    color: var(--primary);
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    border-top-color: var(--primary);
    border-right-color: var(--primary);
    transition:
      width 0.25s ease-out,
      height 0.25s ease-out 0.25s;
  }

  &:hover::after {
    border-bottom-color: var(--primary);
    border-left-color: var(--primary);
    transition:
      border-color 0s ease-out 0.5s,
      width 0.25s ease-out 0.5s,
      height 0.25s ease-out 0.75s;
  }

  &:hover {
    color: var(--primary);
  }

  &::after {
    top: 0;
    left: 0;
  }

  &:hover::before {
    border-top-color: var(--primary);
    border-right-color: var(--primary);
  }

  &:hover::after {
    border-bottom-color: var(--primary);
    border-left-color: var(--primary);
    transition:
      height 0.25s ease-out,
      width 0.25s ease-out 0.25s;
  }
`;

export default Button;