
# Documentation: updateStateByDotNotation Function

## Overview

The `updateStateByDotNotation` function updates the value of a nested property within an object using a dot notation string as a path. If any part of the path doesn't exist in the object, it will be created.

## Function Definition

```javascript
export const updateStateByDotNotation = (object, path, value) => { ... };
```

### Parameters:

- **object**: The initial object that you want to modify.
- **path**: A string representing the property's path using dot notation (e.g., 'a.b.c').
- **value**: The value to set for the property specified by the path.

### Functionality:

1. The function first splits the `path` string by dots ('.') to get an array of keys.
2. It then traverses through the object using these keys.
3. If a key doesn't exist in the current object, it creates an empty object for that key.
4. Finally, it sets the desired value on the deepest key specified by the path.

## Return Value:

The function returns the modified object.

## Usage Example:

If you have an object like `{ a: { b: { c: 5 } } }` and you want to update the value of `c` to `10`, you can do:

```javascript
const obj = { a: { b: { c: 5 } } };
const updatedObj = updateStateByDotNotation(obj, 'a.b.c', 10);
console.log(updatedObj); // Outputs: { a: { b: { c: 10 } } }
```

## Export:

The function is exported as a named export, allowing it to be imported and used in other parts of the application.

