export default async function fetchAPI(method, url, body = null) {
    const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: Array(JSON.stringify(body))
    }

    if (method !== "GET") {
        fetch(url, requestOptions)
            .then(response => {
                console.log("fetchAPI response: ", response);
                return response.json();
            });
    } else {
        const response = await fetch(url)
            .then(response => { return response.json() })
            .then(data => { if (data) { return data[0] } })
            .catch(error => {
                console.log("Error fetching data: ", error);
            })
        return response;
    }

}