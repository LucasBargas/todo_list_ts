import React from 'react';
import * as S from './styles';
import { FaXmark } from 'react-icons/fa6';
import { Title } from '../Title';
import { useModal } from '../../hooks/useModal';
import { Button } from '../Button';
import { Theme } from '../../styles/Theme';
import { useLoading } from '../../hooks/useLoading';
import { useCompleteTaskList } from '../../hooks/useCompleteTaskList';
import { useTaskList } from '../../hooks/useTaskList';
import { Form } from '../Form';
import { Input } from '../Input';
import { handleFocusOnInput } from '../../utils/handleFocusOnInput';

interface Props {
  handleDeleteAllComplete?: () => void;
  handleDeleteAll?: () => void;
}

export const Modal = (props: Props): JSX.Element => {
  const { modal, setModal, modalType, modalLegend, modalId } = useModal();
  const { setLoading } = useLoading();
  const { completeTaskList, setCompleteTaskList } = useCompleteTaskList();
  const { taskList, setTaskList } = useTaskList();
  const [inputValue, setInputValue] = React.useState<string>('');
  const [error, setError] = React.useState<undefined | string>('');
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleOutsideClick = (e: React.MouseEvent): void => {
    if (modal && e.currentTarget === e.target) {
      setModal(false);
    }
  };

  const handleDeleteOne = (): void => {
    const taskListCopy = taskList.filter((task) => {
      return task.id !== modalId;
    });

    const completeTaskListCopy = completeTaskList.filter((task) => {
      return task.id !== modalId;
    });

    setTaskList(taskListCopy);
    setCompleteTaskList(completeTaskListCopy);
    setModal(false);

    if (taskList.length === 1) {
      localStorage.removeItem('taskList');
    }

    if (completeTaskList.length === 1) {
      localStorage.removeItem('completeTaskList');
    }
  };

  const handleTaskVerification = (): boolean => {
    let isValid = true;

    const taskListCopy = taskList.map((el) => el.task);
    if (taskListCopy.includes(inputValue)) isValid = false;

    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleFocusOnInput(inputRef);

    if (inputValue === '' || !inputValue.trim()) {
      setError('Você precisa digitar algo.');
      return;
    }

    if (!handleTaskVerification()) {
      setError('Você já cadastrou uma tarefa com este tema.');
      return;
    }

    const taskListCopy = taskList.map((el) => el);
    const completeTaskListCopy = completeTaskList.map((el) => el);

    taskListCopy.forEach((el) => {
      if (el.id === modalId) {
        el.task = inputValue;
      }
    });

    completeTaskListCopy.forEach((el) => {
      if (el.id === modalId) {
        el.task = inputValue;
      }
    });

    setTaskList(taskListCopy);
    setCompleteTaskList(completeTaskListCopy);
    setInputValue('');
    setModal(false);
  };

  return (
    <S.ModalContainer onClick={handleOutsideClick} modal={modal}>
      <S.ModalArea modal={modal}>
        <S.ModalButton>
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            <FaXmark />
          </button>
        </S.ModalButton>

        <S.ModalAreaContent>
          {!!modalType && modalType === 'deleteAllComplete' && (
            <React.Fragment>
              <Title
                title="Você irá deletar todas as tarefas completas!"
                legend={
                  completeTaskList.length === 0 && 'Não há tarefas completas.'
                }
                fontSize="1.5rem"
              />

              {completeTaskList.length > 0 && <p>Você tem certeza disso?</p>}

              <S.ModalButtonsController>
                {completeTaskList.length > 0 && (
                  <Button
                    bg={Theme.colors.greenColor}
                    bgHover={Theme.colors.greenColorHover}
                    center
                    handleClick={() => {
                      props.handleDeleteAllComplete!();
                      setModal(false);
                      setLoading(true);
                    }}
                  >
                    Confirmar
                  </Button>
                )}
                <Button
                  bg={Theme.colors.darkBtnColor}
                  bgHover={Theme.colors.primaryColor}
                  center
                  handleClick={() => {
                    setModal(false);
                  }}
                >
                  Cancelar
                </Button>
              </S.ModalButtonsController>
            </React.Fragment>
          )}

          {!!modalType && modalType === 'deleteAll' && (
            <React.Fragment>
              <Title
                title="Você irá deletar todas as tarefas!"
                fontSize="1.5rem"
              />

              <p>Você tem certeza disso?</p>

              <S.ModalButtonsController>
                <Button
                  bg={Theme.colors.greenColor}
                  bgHover={Theme.colors.greenColorHover}
                  center
                  handleClick={() => {
                    props.handleDeleteAll!();
                    setModal(false);
                    setLoading(true);
                  }}
                >
                  Confirmar
                </Button>
                <Button
                  bg={Theme.colors.darkBtnColor}
                  bgHover={Theme.colors.primaryColor}
                  center
                  handleClick={() => {
                    setModal(false);
                  }}
                >
                  Cancelar
                </Button>
              </S.ModalButtonsController>
            </React.Fragment>
          )}

          {!!modalType && modalType === 'editOne' && (
            <React.Fragment>
              <Title
                title="Você está editando a tarefa:"
                legend={`"${modalLegend}"`}
                fontSize="1.5rem"
              />

              <Form handleSubmit={handleSubmit}>
                <Input
                  inputRef={inputRef}
                  placeholder="Edite sua Tarefa..."
                  handleChange={handleChange}
                  inputValue={inputValue}
                  error={error}
                />

                <p>Você tem certeza disso?</p>

                <S.ModalButtonsController>
                  <Button
                    bg={Theme.colors.greenColor}
                    bgHover={Theme.colors.greenColorHover}
                    center
                    submit
                  >
                    Confirmar
                  </Button>
                  <Button
                    bg={Theme.colors.darkBtnColor}
                    bgHover={Theme.colors.primaryColor}
                    center
                    handleClick={() => {
                      setModal(false);
                    }}
                  >
                    Cancelar
                  </Button>
                </S.ModalButtonsController>
              </Form>
            </React.Fragment>
          )}

          {!!modalType && modalType === 'deleteOne' && (
            <React.Fragment>
              <Title
                title="Você está deletando a tarefa:"
                legend={`"${modalLegend}"`}
                fontSize="1.5rem"
              />

              <p>Você tem certeza disso?</p>

              <S.ModalButtonsController>
                <Button
                  bg={Theme.colors.greenColor}
                  bgHover={Theme.colors.greenColorHover}
                  center
                  handleClick={handleDeleteOne}
                >
                  Confirmar
                </Button>
                <Button
                  bg={Theme.colors.darkBtnColor}
                  bgHover={Theme.colors.primaryColor}
                  center
                  handleClick={() => {
                    setModal(false);
                  }}
                >
                  Cancelar
                </Button>
              </S.ModalButtonsController>
            </React.Fragment>
          )}
        </S.ModalAreaContent>
      </S.ModalArea>
    </S.ModalContainer>
  );
};
