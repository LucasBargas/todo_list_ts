/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';
import { type ITask } from '../interfaces/ITask';

interface Props {
  children: JSX.Element;
}

interface ICompleteTaskCompleteListContextData {
  completeTaskList: ITask[];
  setCompleteTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskCompleteListContext =
  React.createContext<ICompleteTaskCompleteListContextData>(
    {} as ICompleteTaskCompleteListContextData,
  );

export const CompleteTaskListProvider = ({ children }: Props): JSX.Element => {
  const [completeTaskList, setCompleteTaskList] = React.useState<ITask[]>([]);

  return (
    <TaskCompleteListContext.Provider
      value={{ completeTaskList, setCompleteTaskList }}
    >
      {children}
    </TaskCompleteListContext.Provider>
  );
};

export const useCompleteTaskList = (): ICompleteTaskCompleteListContextData => {
  const { completeTaskList, setCompleteTaskList } = React.useContext(
    TaskCompleteListContext,
  );

  React.useEffect(() => {
    if (completeTaskList.length > 0) {
      localStorage.setItem(
        'completeTaskList',
        JSON.stringify(completeTaskList),
      );
    }
  }, [completeTaskList]);

  React.useEffect(() => {
    if (
      localStorage.getItem('completeTaskList') &&
      localStorage.getItem('completeTaskList')!.length > 0
    ) {
      setCompleteTaskList(
        JSON.parse(localStorage.getItem('completeTaskList')!),
      );
    }
  }, [setCompleteTaskList]);

  return {
    completeTaskList,
    setCompleteTaskList,
  };
};
