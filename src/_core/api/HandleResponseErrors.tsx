import { useCallback, useEffect, useState, useContext } from 'react';

import { Alert, Snackbar } from '@mui/material';

import { instanceApi } from './instanceApi';
import { ErrorContent, ErrorResponse, ServerResponse, ServerError } from './types';
import { GlobalStateContext } from 'src/_shared/context';

export const HandleResponseErrors = () => {
    const { isAuthenticated } = useContext(GlobalStateContext);

    const [stateSnackbar, setStateSnackbar] = useState<{
        open: boolean;
        message?: ErrorContent;
    }>({
        open: false,
        message: 'Что-то пошло не так...',
    });

    const openSnackbar = useCallback((content: ErrorContent) => {
        setStateSnackbar({
            open: true,
            message: content,
        });
    }, []);

    const closeSnackbar = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setStateSnackbar({
            open: false,
        });
    };

    const callMessageForErrors = useCallback(
        (errors: ErrorContent): void => {
            if (Array.isArray(errors)) {
                errors.forEach((err) => {
                    openSnackbar(err);
                });
            } else {
                openSnackbar(errors);
            }
        },
        [openSnackbar],
    );

    const handleServerError = useCallback(
        (status: number, url?: string, method?: string) => {
            if (!isAuthenticated && method && !/post|put|delete/.test(method)) {
                return;
            }

            switch (true) {
                case status === 500:
                    callMessageForErrors('Что-то пошло не так... Попробуйте зайти позже');
                    break;
                case status >= 501 && status <= 599:
                    callMessageForErrors('Сервер не отвечает. Попробуйте позже');
                    break;
            }
        },
        [callMessageForErrors, isAuthenticated],
    );

    useEffect(() => {
        const responseInterceptor = instanceApi.interceptors.response.use(
            (res: ServerResponse) => res,
            (err: ServerError<ErrorResponse>) => {
                if (err?.response?.data !== undefined) {
                    const {
                        status,
                        data,
                        config: { method, url },
                    } = err.response;

                    handleServerError(status, url, method);

                    if (!isAuthenticated && (status === 401 || status === 403)) {
                        return;
                    }

                    if (data?.errorContent?.length && !data?.errorAction) {
                        callMessageForErrors(data.errorContent);
                        return Promise.reject(err);
                    } else if (data?.error?.length) {
                        callMessageForErrors(data.error);
                    } else {
                        return Promise.reject(err);
                    }
                } else {
                    callMessageForErrors('Что-то пошло не так... Попробуйте зайти позже');
                }
            },
        );

        return () => {
            instanceApi.interceptors.response.eject(responseInterceptor);
        };
    }, [callMessageForErrors, handleServerError, isAuthenticated]);

    return (
        <Snackbar
            open={stateSnackbar.open}
            onClose={closeSnackbar}
            autoHideDuration={4000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={closeSnackbar} severity="error" sx={{ width: '100%', whiteSpace: 'pre-wrap' }}>
                {stateSnackbar.message as string}
            </Alert>
        </Snackbar>
    );
};
