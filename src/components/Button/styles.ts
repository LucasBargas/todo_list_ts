import styled, { css } from 'styled-components';

interface ButtonProps {
  center?: boolean;
  bg: string;
  bgHover: string;
}

export const ButtonContainer = styled.div<ButtonProps>`
  ${({ center }) =>
    center &&
    css`
      display: flex;
      justify-content: center;
  `}

  button {
    background: ${({ bg }) => bg};
    color: ${({ theme }) => theme.colors.lightColor};
    width: ${({ center }) => (center ? 'auto' : '100%')};
    box-shadow: transparent 0px 0px, transparent 0px 0px;
    border-radius: 4px;
    padding: .75rem 1rem;
    font-size: .875rem;
    font-weight: 500;
    transition: .4s;

    &:hover {
      background: ${({ bgHover }) => bgHover};
    }

    &.active {
      background: ${({ theme }) => theme.colors.greenColorHover};
      box-shadow: rgb(1, 4, 9) 0px 8px 12px;
    }
  }
`;
