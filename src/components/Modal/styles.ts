import styled from 'styled-components';

export const ModalContainer = styled.section<{ modal: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  height: calc(100vh + 2rem);
  background: rgba(13, 16, 23, .9);
  opacity: ${({ modal }) => (!modal ? '0' : '1')};
  pointer-events: ${({ modal }) => (!modal ? 'none' : 'all')};;
  transition: .2s;
`;

export const ModalArea = styled.div<{ modal: boolean }>`
  background: ${({ theme }) => theme.colors.secondaryColor};
  max-width: 560px;
  width: 100%;
  box-shadow: rgb(1, 4, 9) 0px 8px 24px;
  border-radius: 6px;
  border: 1px solid rgb(48, 54, 61);
  transform: ${({ modal }) =>
    modal ? 'translate3d(0, 0, 0)' : 'translate3d(0, -40px, 0)'};
  transition: .2s;

  span {
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
  }
`;

export const ModalButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: .5rem;

  button {
    font-size: 1.625rem;
    padding: .25rem;
    background: transparent;
    color: ${({ theme }) => theme.colors.lightColor};
  }
`;

export const ModalAreaContent = styled.div`
  padding: 0 2rem 2rem 2rem;

  @media (max-width: 414px) {
    padding: 0 1rem 1rem 1rem;
  }
`;

export const ModalButtonsController = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;
