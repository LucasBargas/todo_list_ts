/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react';

interface Props {
  children: JSX.Element;
}

interface ILoadingContextData {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = React.createContext<ILoadingContextData>(
  {} as ILoadingContextData,
);

export const LoadingProvider = ({ children }: Props): JSX.Element => {
  const [loading, setLoading] = React.useState<boolean>(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): ILoadingContextData => {
  const { loading, setLoading } = React.useContext(LoadingContext);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  });

  return {
    loading,
    setLoading,
  };
};
