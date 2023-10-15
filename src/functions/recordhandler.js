
export const createRecord = async (description, rating, username) => {
    const response = await fetch(`http://192.168.1.228:5000/newrecord?description=${description}&rating=${rating}&username=${username}`, 
        { method: 'POST' }
    )
    return response.status
}