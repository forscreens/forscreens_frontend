const BASE_URL = "https://yourapiendpoint.com/";

export const updateActorInformation = async (actorData) => {
    const response = await fetch(`${BASE_URL}/updateActor`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(actorData),
    });

    if (!response.ok) {
        throw new Error("Failed to update actor information");
    }

    return response.json();
};
