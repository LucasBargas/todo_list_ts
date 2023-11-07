import { Homepage } from './pages/Homepage';
import { TaskListProvider } from './hooks/useTaskList';
import { LoadingProvider } from './hooks/useLoading';
import { CompleteTaskListProvider } from './hooks/useCompleteTaskList';
import { ModalProvider } from './hooks/useModal';

const App = (): JSX.Element => {
  return (
    <TaskListProvider>
      <CompleteTaskListProvider>
        <LoadingProvider>
          <ModalProvider>
            <Homepage />
          </ModalProvider>
        </LoadingProvider>
      </CompleteTaskListProvider>
    </TaskListProvider>
  );
};

export default App;
