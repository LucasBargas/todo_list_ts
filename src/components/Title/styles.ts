import styled from 'styled-components';

export const TitleContainer = styled.div<{ fontSize: string }>`
  text-align: center;

  h1, h2 {
    color: ${({ theme }) => theme.colors.lightColor};
    font-size: ${({ fontSize }) => fontSize};
  }

  span {
    margin-top: .5rem;
  }
`;
