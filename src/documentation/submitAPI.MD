
# Documentation: submitData Function

## Overview

The `submitData` function is designed to submit a specified field and its value to an appropriate API endpoint. The function determines the path of the field within a given JSON schema, constructs the payload, and sends it to the API endpoint associated with the top-level key of the path.

## Imports

```javascript
import jsonschema from './schema.json';
import { findPath } from "../utility/findPath";
import { setNestedObjectValue } from "../utility/setNestedObjectValue.jsx";
```

- **jsonschema**: A JSON schema that defines the structure of the data. It is used to validate and locate fields within the data.
- **findPath**: A utility function imported from `findPath.js`. It is used to find the path of a given field within the `jsonschema`.
- **setNestedObjectValue**: A utility function imported from `setNestedObjectValue.jsx`. It is used to set a specified value at a specified path within an object.

## Constants

- **BASE_URL**: The base URL for the API endpoints. All the API requests will be sent to URLs that start with this base URL.

## Function Definition

```javascript
export const submitData = async (field, value) => { ... };
```

### Parameters:

- **field**: The name of the field (or key) for which the value needs to be updated.
- **value**: The new value that needs to be set for the specified field.

### Functionality:

1. The function uses the `findPath` utility function to determine the path of the `field` within the `jsonschema`.
2. If the `field` is not found in the `jsonschema`, an error is thrown.
3. The `type` is determined from the path, which is the top-level key in the schema (e.g., "actorHeader" or "actorProfile").
4. An empty payload object is initialized, and the `setNestedObjectValue` utility function is used to set the `value` at the `path` within this object.
5. Depending on the `type`, the function sets the appropriate API endpoint.
6. The function sends a POST request to the determined API endpoint with the constructed payload.
7. If the API request is successful, the function returns the parsed JSON response, else it returns `null`.
8. If a network error occurs, the function silently handles it and returns `null`.

## Return Value:

- A parsed JSON object if the API request is successful.
- `null` if the API request is not successful or if a network error occurs.

## Usage Example:

```javascript
const field = "actorName";
const value = "John Doe";
const response = await submitData(field, value);
```

## Export:

The function is exported as a named export, allowing it to be imported and used in other parts of the application.

## Related Files:

- `schema.json`: The JSON schema used to validate and locate fields within the data.
- `findPath.js`: Contains the `findPath` utility function used to find the path of a given field within the `jsonschema`.
- `setNestedObjectValue.jsx`: Contains the `setNestedObjectValue` utility function used to set a specified value at a specified path within an object.

