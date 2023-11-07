import React from 'react';
import * as S from './styles';

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: JSX.Element[];
}

export const Form = (props: Props): JSX.Element => {
  return (
    <S.FormContainer onSubmit={props.handleSubmit}>
      {props.children}
    </S.FormContainer>
  );
};
