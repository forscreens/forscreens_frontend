
# Documentation: ActorHeader Component

## Overview

The `ActorHeader` component represents the header section of an actor's profile. This header includes an avatar (with an edit option), editable fields, and a stylized backdrop. The component is designed to be flexible, allowing for easy updates to its content.

## Imports

```javascript
import React, { useState } from 'react';
import { AppBar, Toolbar, TextField, Avatar, styled, IconButton, Box, Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import backgroundImage from '../../../assets/images/appbar_background.png';
import EditableField from './EditableField';
import { useAPIUpdate } from "../../../components/hooks/useAPIUpdate";
import EditIcon from '@mui/icons-material/Edit';
import { updateStateByDotNotation } from "../../../components/utility/updateStateByDotNotation";
```

- **@mui/material**: Material-UI components for constructing the layout and interactive elements of the component.
- **backgroundImage**: The image used as the backdrop for the header.
- **EditableField**: A component that provides inline editing capabilities for fields. (Refer: [EditableField Documentation](/mnt/data/EditableField_Documentation.md))
- **useAPIUpdate**: A custom hook that provides functionalities for updating data via API. (Refer: [useAPIUpdate Hook Documentation](/mnt/data/useAPIUpdate_Documentation.md))
- **EditIcon**: An icon from Material-UI representing the edit action.
- **updateStateByDotNotation**: A utility function to update nested object values by specifying a dot notation path. (Refer: [updateStateByDotNotation Function Documentation](/mnt/data/updateStateByDotNotation_Documentation.md))

## Component Structure

The component primarily consists of:

1. An Avatar with an edit icon overlay.
2. A set of editable fields that display user data and allow inline editing.
3. A dialog that facilitates the updating of the avatar image.

## States

The component maintains the following states:

- **editableFields**: An object containing fields that can be edited, their current values, and their editing status.
- **openDialog**: A boolean indicating if the dialog for updating the avatar image is open.
- **tempImageURL**: A temporary URL for the avatar image while it's being updated.
- **actorHeader**: Extracted data from the passed `userData` prop, specifically the header information.

## Component Lifecycle

1. On mount, the component initializes the `editableFields` state using the data provided in the `actorHeader` prop.
2. When a field is edited, the changes are reflected in the `userData` prop using the `updateStateByDotNotation` utility function.
3. The avatar can be updated by clicking on the edit icon, which opens a dialog. The new avatar image can be provided either by pasting a URL or by uploading an image file.
4. The `handleImageUpdate` function handles the avatar image update, setting the new image in the `userData` prop and also making an API call to persist the change.

## Styling

The component uses Material-UI's `styled` utility to define custom styled components, namely `AvatarContainer` and `AvatarEditIcon`. Both are designed to place the edit icon over the bottom-right corner of the avatar.

## API Interaction

The `useAPIUpdate` hook provides the `handleAPIUpdate` function, which is used to submit data changes to the backend. This is utilized in both the avatar update process and the inline field editing via the `EditableField` component.

## Future Updates

When updating or extending this component:

1. **Fields**: To add new fields, expand the `actorHeader` object and adjust the initialization of the `editableFields` state.
2. **Styling**: For visual changes, adjust the styled components or the `sx` prop values within the Material-UI components.
3. **API Endpoints**: If the API structure changes or new endpoints are added, modify the API calling logic accordingly.
4. **Utilities**: The component leverages utility functions and hooks. Ensure that any updates to these utilities are compatible with the component's usage.

## Export

The component is exported as a default export, allowing it to be imported and used in other parts of the application.

