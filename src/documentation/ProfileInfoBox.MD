
# Documentation: ProfileInfoBox Component

## Overview

The `ProfileInfoBox` component represents the profile information section of an actor's profile. This section displays various fields related to the profile, including a passport photo that can be edited. Each field within the profile is editable, allowing users to update the information inline.

## Imports

```javascript
import React, { useState } from 'react';
import { TextField, Avatar, Box, IconButton, styled, Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EditableField from './EditableField';
import { useAPIUpdate } from "../../../components/hooks/useAPIUpdate";
```

- **@mui/material**: Material-UI components for building the layout and interactive elements.
- **EditIcon**: Icon from Material-UI representing the edit action.
- **EditableField**: Component providing inline editing capabilities. (Refer: [EditableField Documentation]
- **useAPIUpdate**: Custom hook offering functionalities for updating data via API. (Refer: [useAPIUpdate Hook Documentation]

## Component Structure

The component primarily consists of:

1. A passport photo (as an Avatar) with an edit option.
2. A set of editable fields, created dynamically based on the data provided.
3. A dialog allowing users to update the passport photo.

## States

The component maintains the following states:

- **editableFields**: Object containing fields available for editing, their current values, and editing status.
- **openDialog**: Boolean indicating if the photo update dialog is open.
- **tempImageURL**: Temporary URL for the passport photo while being updated.
- **profileInfo**: Extracted data from `userData` prop, specifically the profile information.

## Component Lifecycle

1. On mount, initialize `editableFields` state using data from `profileInfo`.
2. When a field is edited, update `userData` prop to reflect the change.
3. For passport photo updates, open a dialog where users can provide a new photo URL or upload an image. Once updated, persist the change via API.

## Styling

The component employs Material-UI's `styled` utility to create custom styled components: `AvatarContainer` and `AvatarEditIcon`. The main `Box` component uses the `sx` prop for inline styling.

## API Interaction

The `useAPIUpdate` hook offers `handleAPIUpdate`, which is utilized to persist any changes made to the fields, including the passport photo, to the backend.

## Future Updates

For modifications or extensions:

1. **Fields**: To introduce new fields, augment the `profileInfo` object and adjust the initialization of `editableFields`.
2. **Styling**: For visual alterations, tweak the styled components or the `sx` prop values in Material-UI components.
3. **API Endpoints**: If the API evolves or new endpoints emerge, adapt the API calling logic.
4. **Utilities**: Given the component's reliance on utility functions/hooks, ensure updates to these utilities are congruent with the component's usage.

## Export

The component is exported as a default export, facilitating its import and use elsewhere in the application.

