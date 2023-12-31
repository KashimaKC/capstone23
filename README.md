# MEDLOG Capstone Project 23

<img src="documentation/capstone_poster_jmaraun_prelim.png" >


## Progress Point 3:
- Added full CRUD functionality for creating records and removing them from the app.
- Updated all of the pages with a fancy new UI.
- Fixed logic with regards to the home page graph.
- Added lots of functionality to the API. There is a new endpoint now to remove records which is: `/deleterecord`
- Switched to iOS for testing and design since I wanted to try something new. All testing has been happening on my iPhone 15 Pro Max.

### New User Interface:
The new UI has been designed to look brighter and more interesting to the eye. Color codes for pain have been added to help users in determining the severity levels.

<img src="documentation/updated_ui_images/home_preview_updated.jpeg" width="250">
<img src="documentation/updated_ui_images/log_page_updated.jpeg" width="250">
<img src="documentation/updated_ui_images/record_preview_updated.jpeg" width="250">

## Progress Point 1: 

- General layout and structuring of infrastrcture and application. 
- Had several prototypes before but decided to start from scratch and rework it.
- Front end: React Native
- API: Python
- Database: MongoDB

## Progress Point 2:

### Database:

Database has been created with the following structure:
The user is created and a `datecreated` field is populated with the time of creation. Following that the records array is initialized and the user is ready to start logging data.
Records are stored in the array as objects which contain a time of the record, description the user sets and the rating of the log.

<img src="documentation/database_preview.JPG" width="300">

### User Interface:

The frontend design has been started, users are greeted with a login screen where they can create a user account or login with an existing user account.

<img src="documentation/login_preview.JPG" width="300">

When the user logins in successfully, they will see a home page with a few navigation options. There is a settings page, a page to view previous logs, and a create new log page.
Here there is also a graph showing how many logs the user has recorded per day for the last seven days. 

*This is not the final design, I am not happy with how the UI is currently so I am currently working to design a new one while adding some more functionality.*

<img src="documentation/home_preview.JPG" width="300">

When interacting with the create new log button they are brought to a screen where they can record the pain rating out of 5 and give a description of what they want to log. I also plan to add more options here for the user to customize their logs.

<img src="documentation/record_preview.JPG" width="300">

### Interacting with the database:

All interactions with the database are done through the python based API. Currently the database is being hosted on my personal computer, I plan to move it to a server eventually. The API has a few different endpoints currently:
- /create_user: simply creates a user, verifies if a user already exists with the username.
- /login_user: logs in a user with the entered information.
- /get_graph_data: returns some information about a users graph to populate the time graph on the home page.
- /create_record: allows the user to create a record in the database.

