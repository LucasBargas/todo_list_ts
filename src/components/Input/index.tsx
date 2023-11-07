import React from 'react';
import * as S from './styles';

interface Props {
  inputRef: React.RefObject<HTMLInputElement>;
  placeholder: string;
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: undefined | string;
}

export const Input = (props: Props): JSX.Element => {
  return (
    <S.InputContainer>
      <input
        ref={props.inputRef}
        type="text"
        placeholder={props.placeholder}
        onChange={props.handleChange}
        value={props.inputValue}
      />
      {props.error && <span>{props.error}</span>}
    </S.InputContainer>
  );
};
