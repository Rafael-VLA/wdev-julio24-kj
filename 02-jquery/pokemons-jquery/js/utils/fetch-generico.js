
export const fetchGenerico = async(url, method = 'GET', data = null) => {
    
    if(method === 'GET'){
        const response = await fetch(url)


        return await response.json()
    }

    const response = await fetch(url, {
        method,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return await response.json();
    
}