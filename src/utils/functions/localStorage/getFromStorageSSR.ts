import { getFromStorage } from './getFromStorage';

export const getFromStorageSSR = <T>(key: string): T | null | string => {
    return typeof localStorage !== 'undefined' ? getFromStorage(key) : '';
};
