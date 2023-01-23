import { useState, Dispatch, SetStateAction } from 'react';
// import { useQuery } from '@tanstack/react-query';

export interface InitialState {
    isAuthenticated: boolean;
    user: null;
    setUser: Dispatch<SetStateAction<null>>;
}

export const initialStateAuthorizationContext = {
    isAuthenticated: false,
    user: null,
    setUser: () => {},
};

export const useAuthorizationContext = () => {
    const [user, setUser] = useState(null);

    // useQuery(['profileInfo'], getProfileInfo, {
    //     onSuccess: (data) => {
    //         setUser(data);
    //         setLoading(false);
    //     },
    //     onError: () => {
    //         setLoading(false);
    //     },
    // });

    return {
        user,
        setUser,
        isAuthenticated: !!user,
    };
};
