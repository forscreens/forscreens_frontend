import { axiosCall } from "./Helper";

export const loginUser = (authRequest) => {

    return axiosCall.post("/api/v1/user/login", authRequest).then((result) => 
        result.data);
};

// signup