
export const createRecord = async (description, rating, username) => {
    const response = await fetch(`http://192.168.1.228:5000/newrecord?description=${description}&rating=${rating}&username=${username}`, 
        { method: 'POST' }
    )
    return response.status
}

export const retrieveRecords = async ( username ) => {
    const response = await fetch(`http://192.168.1.228:5000/retrieverecords?username=${username}`, 
        { method: 'GET' }
    )

    const json = await response.json()

    return json
}

export const removeRecord = async (username, time) => {
    const response = await fetch(`http://192.168.1.228:5000/deleterecord?username=${username}&time=${time}`,
        { method: 'POST'}
    )
    console.log(response.status)
}