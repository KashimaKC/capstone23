
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
    const datetime = new Date()
    let currentDay = datetime.getDate()
    let currentMonth = datetime.getMonth()

    var graphDates = [ 
        {"day": currentDay - 6, "month": currentMonth + 1, "records": 0},
        {"day": currentDay - 5, "month": currentMonth + 1, "records": 0},
        {"day": currentDay - 4, "month": currentMonth + 1, "records": 0},
        {"day": currentDay - 3, "month": currentMonth + 1, "records": 0},
        {"day": currentDay - 2, "month": currentMonth + 1, "records": 0},
        {"day": currentDay - 1, "month": currentMonth + 1, "records": 0}, 
        {"day": currentDay, "month": currentMonth + 1, "records": 0}
    ]

    for (i = 0; i < data.length; i++) {
        var date = new Date(data[i].time * 1000)
        var day = date.getDate()
        
        for (j = 0; j < graphDates.length; j++) {
            if (graphDates[j].day == day) {
                graphDates[j].records += 1
            }
        }
    }

    return graphDates
}