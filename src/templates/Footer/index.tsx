import * as S from './styles';

export const Footer = (): JSX.Element => {
  return (
    <S.FooterContainer>
      <p>
        Esta lista de tarefas foi desenvolvida com <span>♥</span> por{' '}
        <a
          href="https://projetoslucasbargas.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lucas Bargas
        </a>
      </p>

      <a
        href="https://github.com/LucasBargas/todo_list_ts"
        target="_blank"
        rel="noopener noreferrer"
      >
        Clique aqui para visualizar o repositório no GitHub
      </a>
    </S.FooterContainer>
  );
};
