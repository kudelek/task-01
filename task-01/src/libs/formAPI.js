import fetchAPI from "./fetchAPI";

const baseUrl = 'http://localhost:3000/user';

export function editUser(e, userData, userID) {
    e.preventDefault();
    const url = `${baseUrl}/${userID}`;
    return fetchAPI("PUT", url, userData);
}

export async function loadUser() {
    const url = baseUrl;
    return fetchAPI("GET", url);
}