import styled from 'styled-components';

export const TodoAreaContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondaryColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 0 .5rem 1.5rem #010409;
  border-radius: .375rem;
  padding: 2rem 3rem;
`;

export const TodoAreaDeleteButtons = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;
