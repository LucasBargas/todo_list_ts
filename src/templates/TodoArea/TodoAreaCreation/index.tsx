import * as S from './styles';
import { Title } from '../../../components/Title';
import { TodoAreaCreationForm } from './TodoAreaCreationForm';

export const TodoAreaCreation = (): JSX.Element => {
  return (
    <S.TodoAreaCreationContainer>
      <Title mainTitle title="Crie uma Tarefa" fontSize="1.5rem" />
      <TodoAreaCreationForm />
    </S.TodoAreaCreationContainer>
  );
};
