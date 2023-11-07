/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';

interface Props {
  children: JSX.Element;
}

interface IModalContextData {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalType: string | undefined;
  setModalType: React.Dispatch<React.SetStateAction<string | undefined>>;
  modalLegend: string;
  setModalLegend: React.Dispatch<React.SetStateAction<string>>;
  modalId: string;
  setModalId: React.Dispatch<React.SetStateAction<string>>;
}

const ModalContext = React.createContext<IModalContextData>(
  {} as IModalContextData,
);

export const ModalProvider = ({ children }: Props): JSX.Element => {
  const [modal, setModal] = React.useState<boolean>(false);
  const [modalType, setModalType] = React.useState<string | undefined>('');
  const [modalLegend, setModalLegend] = React.useState<string>('');
  const [modalId, setModalId] = React.useState<string>('');

  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
        modalType,
        setModalType,
        modalLegend,
        setModalLegend,
        modalId,
        setModalId,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): IModalContextData => {
  const {
    modal,
    setModal,
    modalType,
    setModalType,
    modalLegend,
    setModalLegend,
    modalId,
    setModalId,
  } = React.useContext(ModalContext);

  return {
    modal,
    setModal,
    modalType,
    setModalType,
    modalLegend,
    setModalLegend,
    modalId,
    setModalId,
  };
};
