export function findPath(obj, field, currentPath = '') {
    for (const key in obj) {
        const newPath = currentPath ? `${currentPath}.${key}` : key;
        if (key === field) {
            return newPath;
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            const deepSearch = findPath(obj[key], field, newPath);
            if (deepSearch) {
                return deepSearch;
            }
        }
    }
    return null;
}
