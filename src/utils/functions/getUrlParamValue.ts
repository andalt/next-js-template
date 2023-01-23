export const getUrlParamValue = (param: string): string | null => {
    if (typeof window !== 'undefined') {
        const newSearchParams = new URLSearchParams(window.location.search);
        return newSearchParams.get(param);
    }

    return null;
};
