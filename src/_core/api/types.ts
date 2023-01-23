import { AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosError } from 'axios';

export type ServerRequestConfig = AxiosRequestConfig;
export type ServerResponse<T = any> = AxiosResponse<T>;
export type ServerPromise<T = any> = AxiosPromise<T>;
export type ServerError<T = any> = AxiosError<T>;

export interface FormErrorsContent {
    [key: string]: string | string[];
}
// TODO: Not actual error content interface
export type ErrorContent = string | string[] | FormErrorsContent;

export interface ErrorResponse {
    errorContent?: ErrorContent;
    errorAction?: string;
    error?: string;
}

export interface CustomErrorData {
    statusCode: number;
    errorContent: ErrorContent;
    timestamp: string;
}

export interface CustomError {
    status: number;
    data: CustomErrorData;
}
