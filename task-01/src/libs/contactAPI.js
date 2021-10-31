import fetchAPI from "./fetchAPI";

const baseUrl = 'http://localhost:3000/contact';

export function setContactData(contactData, userID) {
    const url = `${baseUrl}/${userID}`;
    console.log("url", url);
    return fetchAPI("PUT", url, contactData);
}

export function deleteContactData(userID) {
    const url=`${baseUrl}/${userID}`;
    return fetchAPI("PUT", url, {id: userID})
}