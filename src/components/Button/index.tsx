import * as S from './styles';

interface Props<T> {
  submit?: boolean;
  center?: boolean;
  children: string;
  bg: string;
  bgHover: string;
  className?: string;
  id?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>, el?: T) => void;
}

export const Button = (props: Props<unknown>): JSX.Element => {
  return (
    <S.ButtonContainer
      center={props.center}
      bg={props.bg}
      bgHover={props.bgHover}
    >
      <button
        className={props.className}
        id={props.id}
        onClick={props.handleClick}
        type={props.submit ? 'submit' : 'button'}
      >
        {props.children}
      </button>
    </S.ButtonContainer>
  );
};
