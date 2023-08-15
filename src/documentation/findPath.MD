
# Documentation: findPath Function

## Overview

The `findPath` function is designed to search for a specified field within a nested object and return its path in dot notation. If the field is not found, the function returns `null`.

## Function Definition

```javascript
export function findPath(obj, field, currentPath = '') { ... };
```

### Parameters:

- **obj**: The nested object in which the search is to be performed.
- **field**: The name of the field (or key) for which the path is to be found.
- **currentPath** (optional, default is an empty string): The current path in the recursive search. It's mainly used internally during recursion.

### Functionality:

1. The function iterates over each key in the provided object.
2. If the current key matches the specified field, the path to the field is returned.
3. If the current key's value is an object and is not null, the function recursively searches within this object.
4. If the field is found in the nested object, the path is returned.
5. If the field is not found in the object or any of its nested objects, the function returns `null`.

## Return Value:

- A string representing the path to the field in dot notation if found.
- `null` if the field is not found.

## Usage Example:

Given an object like `{ a: { b: { c: 5 } } }` and you want to find the path to the key `c`, you can do:

```javascript
const obj = { a: { b: { c: 5 } } };
const path = findPath(obj, 'c');
console.log(path); // Outputs: 'a.b.c'
```

## Export:

The function is exported as a named export, allowing it to be imported and used in other parts of the application.

