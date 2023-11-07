import styled from 'styled-components';

export const TodoAreaFilterListContainer = styled.ul`
  padding-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: .75rem;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: .25rem;
    padding: .75rem 1rem;

    span.active {
      color: ${({ theme }) => theme.colors.greenColor};
      text-decoration: line-through;
    }
  }
`;

export const TodoAreaFilterListControllers = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;

  input {
    cursor: pointer;
  }

  button {
    cursor: pointer;
    background: transparent;

    svg {
      color: ${({ theme }) => theme.colors.greenColor};
      font-size: 1.25rem;
      transition: .4s;

      &:hover {
        color: ${({ theme }) => theme.colors.greenColorHover};
      }
    }
  }
`;
