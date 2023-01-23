export function removeFromStorage(key: string, prefix?: string, session?: boolean): void {
    const keyWithPrefix = prefix ? `${prefix}_${key}` : key;

    if (session) {
        sessionStorage.removeItem(keyWithPrefix);
    } else {
        localStorage.removeItem(keyWithPrefix);
    }
}
