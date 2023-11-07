import styled from 'styled-components';

export const InputContainer = styled.div`
  input {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 4px;
    border: 1px solid transparent;
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.lightColor};
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-size: 1rem;
    transition: .4s;

    &:focus {
      border-color: ${({ theme }) => theme.colors.greenColor};
      box-shadow: 0px 0px 6px 0px ${({ theme }) => theme.colors.greenColor};
    }

    &::placeholder {
      font-weight: 500;
    }
  }

  span {
    font-size: .8215rem;
    margin: .325rem .325rem 0 .325rem;
  }
`;
