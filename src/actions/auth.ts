import httpClient from "./http";

export const login = (payload: any) => {
    return httpClient().post("<login url>", payload);
}

export const changePassword = (payload: any) => {
    return httpClient().put("<change password url>", payload);
}

export const refreshAccessToken = (payload: any) => {
    return httpClient().post("<refresh access token url>", payload);
}

