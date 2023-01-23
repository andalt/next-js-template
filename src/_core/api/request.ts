import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { instanceApi } from './instanceApi';

export const request = <T>(config: AxiosRequestConfig): Promise<T> => {
    return instanceApi(config).then((response: AxiosResponse<T>) => response.data);
};
