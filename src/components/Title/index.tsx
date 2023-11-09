import * as S from './styles';

interface Props {
  mainTitle?: boolean;
  title: string;
  legend?: string | false;
  fontSize: string;
}

export const Title = (props: Props): JSX.Element => {
  return (
    <S.TitleContainer fontSize={props.fontSize}>
      {props.mainTitle ? <h1>{props.title}</h1> : <h2>{props.title}</h2>}
      {!!props.legend && <span>{props.legend}</span>}
    </S.TitleContainer>
  );
};
