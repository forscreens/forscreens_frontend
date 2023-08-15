
# Documentation: ActorInfo Component

## Overview

The `ActorInfo` component represents the information section of an actor's profile. This section includes various fields that provide details about the actor. Each field can be edited inline, and the changes can be persisted via an API.

## Imports

```javascript
import React, { useState } from 'react';
import { Box } from '@mui/material';
import EditableField from './EditableField';
import { useAPIUpdate } from "../../../components/hooks/useAPIUpdate";
```

- **@mui/material**: Material-UI components for constructing the layout and interactive elements of the component.
- **EditableField**: A component that provides inline editing capabilities for fields. (Refer: [EditableField Documentation](/mnt/data/EditableField_Documentation.md))
- **useAPIUpdate**: A custom hook that offers functionalities for updating data via API. (Refer: [useAPIUpdate Hook Documentation](/mnt/data/useAPIUpdate_Documentation.md))

## Component Structure

The component primarily consists of:

1. A set of editable fields that display actor information and allow inline editing.

## States

The component maintains the following states:

- **editableFields**: An object containing fields that can be edited, their current values, and their editing status.
- **actorInfo**: Extracted data from the passed `userData` prop, specifically the actor information.

## Component Lifecycle

1. On mount, the component initializes the `editableFields` state using the data provided in the `actorInfo` prop.
2. When a field is edited, the changes are reflected in the `userData` prop, updating the respective field in the `actorInfo` object.
3. The `handleAPIUpdate` function from the `useAPIUpdate` hook is utilized to persist any changes made to the fields.

## Styling

The component employs Material-UI's `sx` prop to define styles, creating a rounded box with a specific background, shadow, and border style.

## API Interaction

The `useAPIUpdate` hook provides the `handleAPIUpdate` function, which is used to submit data changes to the backend. This function is integrated into the inline field editing process via the `EditableField` component.

## Future Updates

When updating or extending this component:

1. **Fields**: To add new fields, expand the `actorInfo` object and adjust the initialization of the `editableFields` state.
2. **Styling**: For visual changes, modify the styled properties or the `sx` prop values within the Material-UI components.
3. **API Endpoints**: If there are changes to the API or new endpoints, update the API calling logic accordingly.
4. **Utilities**: The component uses utility functions and hooks, so ensure compatibility with any updates to these utilities.

## Export

The component is exported as a default export, allowing it to be imported and utilized in other parts of the application.

