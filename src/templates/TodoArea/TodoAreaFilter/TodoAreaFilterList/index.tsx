import React from 'react';
import * as S from './styles';
import { MdEdit, MdDelete } from 'react-icons/md';
import { useTaskList } from '../../../../hooks/useTaskList';
import { useLoading } from '../../../../hooks/useLoading';
import { Loading } from '../../../../components/Loading';
import { useCompleteTaskList } from '../../../../hooks/useCompleteTaskList';
import { Modal } from '../../../../components/Modal';
import { useModal } from '../../../../hooks/useModal';

interface Props {
  filterValue: string;
}

export const TodoAreaFilterList = ({ filterValue }: Props): JSX.Element => {
  const { taskList, setTaskList } = useTaskList();
  const { loading } = useLoading();
  const { completeTaskList, setCompleteTaskList } = useCompleteTaskList();
  const { setModal, setModalType, setModalLegend, setModalId } = useModal();

  const taskListfiltered = taskList.filter((el) => {
    return el.categories.includes(filterValue);
  });

  const handleChangeDone = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    task: string,
  ): void => {
    const taskListCopy = taskList.map((el) => el);

    if (e.target.checked) {
      setCompleteTaskList([
        ...completeTaskList,
        {
          id,
          task,
          categories: ['all', 'complete'],
        },
      ]);

      taskListCopy.forEach((el) => {
        if (el.id === id && el.categories.includes('todo')) {
          el.categories = ['all', 'complete'];
        }
      });

      setTaskList(taskListCopy);
    }

    if (!e.target.checked) {
      setCompleteTaskList(completeTaskList.filter((el) => el.id !== id));

      taskListCopy.forEach((el) => {
        if (el.id === id && el.categories.includes('complete')) {
          el.categories = ['all', 'todo'];
        }
      });

      setTaskList(taskListCopy);

      if (completeTaskList.length === 1) {
        setCompleteTaskList([]);
        localStorage.removeItem('completeTaskList');
      }
    }
  };

  const handleEditTaskButton = (task: string, id: string): void => {
    setModalType('editOne');
    setModal(true);
    setModalLegend(task);
    setModalId(id);
  };

  const handleDeleteTaskButton = (task: string, id: string): void => {
    setModalType('deleteOne');
    setModal(true);
    setModalLegend(task);
    setModalId(id);
  };

  return (
    <S.TodoAreaFilterListContainer>
      {(loading && <Loading />) || (
        <React.Fragment>
          {taskListfiltered.map(({ id, task }) => (
            <li key={id}>
              <span
                className={
                  completeTaskList.some((el) => el.id === id) ? 'active' : ''
                }
              >
                {task}
              </span>

              <S.TodoAreaFilterListControllers>
                <input
                  type="checkbox"
                  checked={completeTaskList.some((el) => el.id === id)}
                  value={task}
                  onChange={(e) => {
                    handleChangeDone(e, id, task);
                  }}
                />
                <button
                  onClick={() => {
                    handleEditTaskButton(task, id);
                  }}
                >
                  <MdEdit />
                </button>
                <button
                  onClick={() => {
                    handleDeleteTaskButton(task, id);
                  }}
                >
                  <MdDelete />
                </button>
              </S.TodoAreaFilterListControllers>
            </li>
          ))}

          {taskList.length === 0 && <p>Não há tarefas cadastradas.</p>}

          {filterValue === 'todo' &&
            taskList.length > 0 &&
            taskListfiltered.length === 0 && (
              <p>
                Não há tarefas <strong>Incompletas</strong>.
              </p>
              // eslint-disable-next-line prettier/prettier
          )}

          {filterValue === 'complete' &&
            taskList.length > 0 &&
            taskListfiltered.length === 0 && (
              <p>
                Não há tarefas <strong>Completas</strong>.
              </p>
              // eslint-disable-next-line prettier/prettier
          )}
        </React.Fragment>
      )}

      <Modal />
    </S.TodoAreaFilterListContainer>
  );
};
