import { API_URL, STRAPI_TOKEN } from "./urls";

export const fetchData = async(path) => {
    let options = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + STRAPI_TOKEN,
        },
    };

    const request = await fetch(`${API_URL}${path}`, options);
    const data = await request.json();

    return data;
};