# Note Taker  

## Description  
This application is an online note-taking tool. It allows a user to input new notes by entering a title and text for the note. The user can then save that note for later reference, and delete the note when the task is completed.  

## Directions for use  
To use the application, click the button on the landing page. When redirected to the note-taking page, simply type the desired text into the text fields provided. When both fields have content, a save button will appear in the upper right-hand corner; click that button to save the note. To see details for an existing note, click on the saved note title in the left column. To create a new note, either overwrite the placeholder text in the right-hand column, or if an existing note is in that space, click the plus sign in the upper right-hand corner to clear the text field for use.  

## Screenshot  
The following screenshot shows the note-taking page with existing notes and a new note ready to save:  

![Note taker screenshot](./public/assets/images/Note%20Taker%20screenshot.png)  

## Technologies used
My part of this application used node.js, with express.js and the uuid npm package as dependencies. It is deployed via Heroku.

## Repository link
https://github.com/bdeutmeyer/note-taker

## Credits  
All of the front-end code was provided as part of the curriculum. Almost all of the back-end code is mine, with the exception of the ```fsUtils.js``` file. That file of utility functions was copied directly from the Unit 11 miniproject code.