
export const createNewUser = async ( username, password ) => {
    const response = await fetch(`http://192.168.1.228:5000/createuser?username=${username}`, 
        { method: 'POST' }
    )
    return response.status
}

export const loginUser = async ( username, password ) => { 
    const response = await fetch(`http://192.168.1.228:5000/login?username=${username}`, 
        { method: 'POST' }
    )
    return response.status
}


// makes a call to the API to gather the amount of records for each day to populate the graph.
export const getRecordCount = async ( username, password ) => {
    const response = await fetch(`http://192.168.1.228:5000/graphdata?username=${username}`,
        { method: 'GET' }
    )
    const data = await response.json()

    return data
}