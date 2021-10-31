export default async function fetchAPI(method, url, body = null) {

    const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : null
    }

    console.log("requestOptions", requestOptions);
    const response = await fetch(url, requestOptions)
        .then(response => { return response.json() })
        .then(data => { if (data) { return data[0] } })
        .catch(error => {
            console.log("Error fetching data: ", error);
        })

    return response;


}