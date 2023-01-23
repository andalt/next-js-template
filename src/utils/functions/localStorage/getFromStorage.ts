export function getFromStorage<T>(key: string, prefix?: string, session?: boolean): T | null {
    const keyWithPrefix = prefix ? `${prefix}_${key}` : key;

    return session
        ? (JSON.parse(sessionStorage.getItem(keyWithPrefix) as string) as T)
        : (JSON.parse(localStorage.getItem(keyWithPrefix) as string) as T);
}
