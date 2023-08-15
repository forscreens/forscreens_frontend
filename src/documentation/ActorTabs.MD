
# Documentation: ActorTabs Component

## Overview

The `ActorTabs` component is designed to display a set of tabs for an actor's profile. These tabs can be used to navigate between different sections or views of the actor's information, such as Details, Media, and Highlights.

## Imports

```javascript
import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
```

- **@mui/material**: Material-UI components used for constructing the tab navigation system.

## Component Structure

The component consists of:

1. A `Box` container to encapsulate the `Tabs` component and provide margin.
2. A `Tabs` component which holds individual `Tab` components representing each section.

## Component Props

- **selectedTab**: Indicates the currently selected tab.
- **onChange**: Callback function to handle tab change events.

## Styling

Each `Tab` component employs the `sx` prop from Material-UI to define its styles:

- **textTransform**: Ensures that the tab label text doesn't undergo transformation (e.g., uppercase).
- **minWidth**: Sets a minimum width for each tab.
- **fontWeight**: Makes the tab label bold.
- **borderRadius**: Provides a slight rounded corner to each tab.
- **backgroundColor**: Gives a default background color, which changes on hover and when the tab is selected.

## Interactivity

The `Tabs` component accepts the `value` prop to determine which tab is currently active. It also accepts the `onChange` prop, a callback function to handle tab changes. This ensures the parent component can respond to tab changes, perhaps updating the displayed content accordingly.

## Future Updates

When considering modifications or extensions:

1. **Adding Tabs**: To introduce a new tab, simply add another `Tab` component within the `Tabs` component. Ensure the label and styling are consistent with existing tabs.
2. **Styling Adjustments**: To alter the visual appearance, modify the `sx` prop values within the `Tab` components.
3. **Functionality**: For changes in tab functionality or adding new features, adjust the corresponding props or introduce new child components.

## Export

The component is exported as a default export, allowing its import and use in other parts of the application.

