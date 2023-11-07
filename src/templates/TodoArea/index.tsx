import * as S from './styles';
import { TodoAreaCreation } from './TodoAreaCreation';
import { TodoAreaFilter } from './TodoAreaFilter';
import { Button } from '../../components/Button';
import { Theme } from '../../styles/Theme';
import { Modal } from '../../components/Modal';
import { useModal } from '../../hooks/useModal';
import { useTaskList } from '../../hooks/useTaskList';
import { useCompleteTaskList } from '../../hooks/useCompleteTaskList';

export const TodoArea = (): JSX.Element => {
  const { setModal, setModalType } = useModal();
  const { taskList, setTaskList } = useTaskList();
  const { setCompleteTaskList } = useCompleteTaskList();

  const handleDeleteAllComplete = (): void => {
    const taskListCopy = taskList.filter((task) => {
      return !task.categories.includes('complete');
    });

    setTaskList(taskListCopy);
    setCompleteTaskList([]);
    localStorage.removeItem('completeTaskList');
  };

  const handleDeleteAll = (): void => {
    setTaskList([]);
    setCompleteTaskList([]);
    localStorage.removeItem('taskList');
    localStorage.removeItem('completeTaskList');
  };

  return (
    <S.TodoAreaContainer>
      <TodoAreaCreation />
      <TodoAreaFilter />

      {taskList.length > 0 && (
        <S.TodoAreaDeleteButtons>
          <Button
            bg={Theme.colors.darkBtnColor}
            bgHover={Theme.colors.primaryColor}
            handleClick={() => {
              setModalType('deleteAllComplete');
              setModal(true);
            }}
          >
            Deletar tarefas completas
          </Button>
          <Button
            bg={Theme.colors.darkBtnColor}
            bgHover={Theme.colors.primaryColor}
            handleClick={() => {
              setModalType('deleteAll');
              setModal(true);
            }}
          >
            Deletar todas as tarefas
          </Button>
        </S.TodoAreaDeleteButtons>
      )}

      <Modal
        handleDeleteAllComplete={handleDeleteAllComplete}
        handleDeleteAll={handleDeleteAll}
      />
    </S.TodoAreaContainer>
  );
};
