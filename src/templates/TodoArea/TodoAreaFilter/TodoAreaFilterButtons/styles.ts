import styled from 'styled-components';

export const TodoAreaFilterButtonsContainer = styled.nav`
  ul {
    display: flex;
    gap: 1.5rem;
    padding-top: 0.75rem;

    @media (max-width: 414px) {
      flex-direction: column;
      padding: 1rem 2rem 0 2rem;
    }

    li {
      width: 100%;
    }
  }
`;
