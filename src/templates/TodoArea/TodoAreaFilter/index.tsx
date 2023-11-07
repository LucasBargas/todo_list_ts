import React from 'react';
import * as S from './styles';
import { Title } from '../../../components/Title';
import { TodoAreaFilterButtons } from './TodoAreaFilterButtons';
import { TodoAreaFilterList } from './TodoAreaFilterList';
import { useLoading } from '../../../hooks/useLoading';

export const TodoAreaFilter = (): JSX.Element => {
  const [filterValue, setFilterValue] = React.useState('all');
  const { setLoading } = useLoading();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setFilterValue(e.currentTarget.id);
    setLoading(true);
  };

  return (
    <S.TodoAreaFilterContainer>
      <Title title="Lista de Tarefas" fontSize="1.25rem" />

      <TodoAreaFilterButtons
        filterValue={filterValue}
        handleClick={handleClick}
      />

      <TodoAreaFilterList filterValue={filterValue} />
    </S.TodoAreaFilterContainer>
  );
};
