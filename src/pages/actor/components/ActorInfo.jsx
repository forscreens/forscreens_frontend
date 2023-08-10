import React from 'react';
import  ReadOnlyActorInformation,{ sections } from './ReadOnlyActorInformation'; 
import EditableActorInformation from './EditableActorInformation';
import { updateActorInformation } from "./SubmitAPI";


const handleFormSubmit = async (values) => {
    try {
        const responseData = await updateActorInformation(values);
        // Handle successful response
    } catch (error) {
        // Handle error
    }
};
const ActorInfo = ({ isEditing, userData }) => {
    if (isEditing) {
        return <EditableActorInformation initialValues={userData} onSubmit={handleFormSubmit} />;
    }

    return sections.map(section => (
        <ReadOnlyActorInformation 
            key={section.key} 
            title={section.title} 
            data={userData[section.key]} 
        />
    ));
};

export default ActorInfo;
