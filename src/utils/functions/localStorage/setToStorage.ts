export function setToStorage<T>(key: string, value: T, prefix?: string, session?: boolean): void {
    const keyWithPrefix = prefix ? `${prefix}_${key}` : key;
    const stringified = JSON.stringify(value);

    if (session) {
        sessionStorage.setItem(keyWithPrefix, stringified);
    } else {
        localStorage.setItem(keyWithPrefix, stringified);
    }
}
