import React from 'react';
import * as S from './styles';
import { v4 as uuidv4 } from 'uuid';
import { Form } from '../../../../components/Form';
import { handleFocusOnInput } from '../../../../utils/handleFocusOnInput';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import { Theme } from '../../../../styles/Theme';
import { useTaskList } from '../../../../hooks/useTaskList';

export const TodoAreaCreationForm = (): JSX.Element => {
  const { taskList, setTaskList } = useTaskList();
  const [inputValue, setInputValue] = React.useState<string>('');
  const [error, setError] = React.useState<undefined | string>('');
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleTaskVerification = (): boolean => {
    let isValid = true;

    const taskListCopy = taskList.map((el) => el.task);
    if (taskListCopy.includes(inputValue)) isValid = false;

    return isValid;
  };

  const handleTaskCreation = (): void => {
    setTaskList([
      {
        id: uuidv4(),
        task: inputValue,
        categories: ['all', 'todo'],
      },
      ...taskList,
    ]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleFocusOnInput(inputRef);

    if (inputValue === '' || !inputValue.trim()) {
      setError('Você precisa digitar uma tarefa.');
      return;
    }

    if (!handleTaskVerification()) {
      setError('Você já cadastrou uma tarefa com este tema.');
      return;
    }

    handleTaskCreation();
    setInputValue('');
  };

  return (
    <S.TodoAreaCreationFormContainer>
      <Form handleSubmit={handleSubmit}>
        <Input
          inputRef={inputRef}
          placeholder="Digite uma nova Tarefa..."
          handleChange={handleChange}
          inputValue={inputValue}
          error={error}
        />
        <Button
          submit
          bg={Theme.colors.greenColor}
          bgHover={Theme.colors.greenColorHover}
        >
          Adicionar nova Tarefa
        </Button>
      </Form>
    </S.TodoAreaCreationFormContainer>
  );
};
