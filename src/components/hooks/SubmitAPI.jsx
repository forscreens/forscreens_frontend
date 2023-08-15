import jsonschema from './schema.json';
import { findPath } from "../utility/findPath";
import { setNestedObjectValue } from "../utility/setNestedObjectValue.jsx";

const BASE_URL = "https://yourapiendpoint.com/";


export const submitData = async (field, value) => {
    const path = findPath(jsonschema, field);

    if (!path) {
        throw new Error(`Field '${field}' not found in the schema!`);
    }

    const type = path.split('.')[0]; // This will give the top-level key (e.g., "actorHeader" or "actorProfile")

    let payload = {};
    setNestedObjectValue(payload, path, value);

    let endpoint;

    switch (type) {
        case "actorHeader":
            endpoint = "/updateActorHeader";
            break;
        case "profileInfo":
            endpoint = "/updateActorProfile";
            break;
        case "actorInfo":
            endpoint = "/updateActorProfile";
            break;
        // ... other types and their respective endpoints
        default:
            throw new Error("Invalid data type provided");
    }

    try {

        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            return null;

        }

        return response.json();
    } catch (error) {
        // Silently handle the network error
        return null;
    }
};