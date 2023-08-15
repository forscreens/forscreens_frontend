
# Documentation: EditableField Component

## Overview

`EditableField` is a React functional component that renders a text field which can be toggled between edit and view modes. It allows the user to edit a value inline and save the changes.



## Props

- **label**: The label for the text field.
- **value**: The initial value of the text field.
- **onValueChange**: A function to communicate the change to its parent component.
- **onSave**: An optional callback function that is called when the save button is clicked.
- **hideUnderline**: A boolean to control whether the underline of the text field is hidden.
- **styleType**: A string that sets the style of the text. Possible values: 'header', 'subtitle', 'subtitle1'.

## Component State

- **isEditing**: A boolean state indicating if the field is in edit mode.
- **tempValue**: A temporary value that stores the current value of the text field while editing.

## Methods

### handleSave

This method is called when the user clicks the save button. It performs the following actions:
- Sets `isEditing` to `false` to exit editing mode.
- Calls the `onValueChange` prop with the `tempValue` as an argument.
- If `onSave` prop is provided and is a function, it is called with `label` and `tempValue` as arguments.

## Styling

Based on the `styleType` prop, different styles are applied to the text:
- **header**: Bold text with a font size of 1.5em.
- **subtitle**: Medium weight text with a font size of 1.2em.
- **subtitle1**: Normal weight text with a font size of 1em.

## Rendering

The component renders a `TextField` from Material-UI with various props configured. 
It conditionally renders either a `SaveIcon` or an `EditIcon` at the end of the input, based on the `isEditing` state.

## Export

The `EditableField` component is exported as the default export, allowing it to be imported and used in other parts of the application.

