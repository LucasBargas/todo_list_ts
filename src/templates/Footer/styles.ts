import styled from 'styled-components';

export const FooterContainer = styled.footer`
  text-align: center;

  p {
    margin: 2rem 0 .25rem 0;
  }

  a, span {
    display: inline-block;
    color: ${({ theme }) => theme.colors.greenColor};
    font-weight: 700;
  }

  a:hover {
    text-decoration: underline;
  }
`;
