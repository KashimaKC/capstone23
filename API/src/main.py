from flask import Flask, request, jsonify
import pymongo, json
from datetime import datetime, timedelta

app = Flask(__name__)

def initializeConnection() -> pymongo.database.Database | Exception :
    try:
        client = pymongo.MongoClient("mongodb://localhost:27017")
        db = client["CapstoneUsers"]
        return db
    except Exception as e:
        print(e)

def verifyUserExistence(database: pymongo.database.Database, username: str) -> True | False :
    users = database["Users"].find({"username": username})

    for record in users:
        if record is not None:
            return True
        else:
            return False

@app.post("/createuser")
def create_user():
    username = request.args.get('username')
    database = initializeConnection()
    collection = database['Users']

    result = verifyUserExistence(database, username)
    if result is None:
        collection.insert_one(
            {
                "username": username, 
                "datecreated": datetime.now().timestamp(),
                "records" : [

                ]
            }
        )
        return "Success, new user has been created!", 200, {}
    else:
        return "Username already in use.", 403, {}

@app.post("/login")
def login_user():
    username = request.args.get('username')
    database = initializeConnection()
    result = verifyUserExistence(database, username)

    if result is None:
        print("invalid username")
        return "Invalid Username", 403, {}
    else:
        print("login success")
        return "Success", 200, {}

@app.get("/retrieverecords")
def get_records():
    username = request.args.get('username')
    database = initializeConnection()
    col = database["Users"]

    try:
        documents = col.find({"username": username})
        for item in documents:
            return jsonify(item['records'])
    except Exception as e:
        print(e)
        return "exception"

@app.get("/graphdata")
def get_graph_data():
    username = request.args.get('username')
    database = initializeConnection()
    col = database["Users"]

    try:
        documents = col.find({"username": username})
        for item in documents:
            records = item['records']

            # note current date for json object
            today = datetime.now()

            # initializes counts for last 7 dates for graph
            dateobj = {}
            for i in range(7):
                date = today + timedelta(days=-i)
                dateobj.update({date.strftime('%m-%d'): 0})

            for log in records:
                record_date = datetime.fromtimestamp(log['time']).strftime('%m-%d')
                
                if record_date in dateobj:
                    dateobj[record_date] = dateobj[record_date] + 1

            return dateobj
        
    except Exception as e:
        print(e)
        return "exception"

@app.post("/newrecord")
def create_record():
    description = request.args.get('description')
    rating = request.args.get('rating')
    username = request.args.get('username')
    database = initializeConnection()
    col = database["Users"]

    try:
        col.update_one(
            {"username": username}, 
            {"$push": 
                {"records" : 
                    {
                        "time": datetime.now().timestamp(),
                        "description": description, 
                        "rating": rating
                    }
                } 
            }
        )
        return "Document created successfully", 200, {}
    except Exception as e:
        return "Failed to create document", 500, {}


app.run(host='192.168.1.228')