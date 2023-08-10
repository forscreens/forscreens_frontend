import React from 'react';
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// You can create a schema for validation using Yup if needed
const validationSchema = Yup.object({
    // For instance, if the aboutMe field is a string and is required:
    // aboutMe: Yup.string().required('Required'),
});

const EditableActorInformation = ({ initialValues, onSubmit }) => {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            onSubmit(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{ marginLeft: '20px', flexGrow: 1 }}>
            {
                Object.keys(initialValues).map(key => (
                    <TextField
                        key={key}
                        id={key}
                        name={key}
                        label={key.charAt(0).toUpperCase() + key.slice(1)} // capitalize the label
                        value={formik.values[key]}
                        onChange={formik.handleChange}
                        error={formik.touched[key] && Boolean(formik.errors[key])}
                        helperText={formik.touched[key] && formik.errors[key]}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                ))
            }
            <Button type="submit" color="primary" variant="contained" sx={{ marginTop: 2 }}>
                Save Changes
            </Button>
        </form>
    );
}

export default EditableActorInformation;
