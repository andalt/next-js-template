import { useMemo, createContext } from 'react';

import { InitialState, initialStateAuthorizationContext, useAuthorizationContext } from './hooks/authorization';

export const GlobalStateContext = createContext<InitialState>({ ...initialStateAuthorizationContext });

interface GlobalStateProviderProps {
    children: React.ReactNode;
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
    const authorizationContext = useAuthorizationContext();

    const value = useMemo(() => ({ ...authorizationContext }), [authorizationContext]);

    return <GlobalStateContext.Provider value={value}>{children}</GlobalStateContext.Provider>;
};
