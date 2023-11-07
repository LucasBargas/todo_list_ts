/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { type ITask } from '../interfaces/ITask';

interface Props {
  children: JSX.Element;
}

interface ITaskListContextData {
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskListContext = React.createContext<ITaskListContextData>(
  {} as ITaskListContextData,
);

export const TaskListProvider = ({ children }: Props): JSX.Element => {
  const [taskList, setTaskList] = React.useState<ITask[]>([]);

  return (
    <TaskListContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TaskListContext.Provider>
  );
};

export const useTaskList = (): ITaskListContextData => {
  const { taskList, setTaskList } = React.useContext(TaskListContext);

  React.useEffect(() => {
    if (taskList.length > 0) {
      localStorage.setItem('taskList', JSON.stringify(taskList));
    }
  }, [taskList]);

  React.useEffect(() => {
    if (
      localStorage.getItem('taskList') &&
      localStorage.getItem('taskList')!.length > 0
    ) {
      setTaskList(JSON.parse(localStorage.getItem('taskList')!));
    }
  }, [setTaskList]);

  return {
    taskList,
    setTaskList,
  };
};
