# React-Redux with Sagas

#Project Description 
The Weekend Saga Movie Project displayed a list of movies. The application would ideally allow user to click on a movie image, when the image is clicked on, it should direct them to a different page('/details'). The details page--should displays the description of the movie alongside the genres  associated with the movie. When a user clicks on the edit button, user will be directed to the edit page, where there are two input texts. From the client-side, the input texts  updates the original tite/description of the movie. From the back-end and server-side when the user submits the changes, the database will update the title and description of the movie(the PUT request that dispatches from the client side to the server side updates the database). The user also has the ability to discard the changes by clicking on the cancel button which redirects them back to the home page--which in this case is home page('/'). 

For this weekend project, we used numerous GET requests and one PUT which updated our database when the user submits changes in the edit page. We used many to many junction table to combined our movies and genres tables. I personally utilized the GRID styling from @Material-UI to style. 



> **PLEASE COMMENT YOUR CODE.** Do not clone this repository. Instead, download the zip, extract the contents, `git init`, `git add .`, `git commit -m "initial commit - base project"` and add your remote. Please do this before you leave for the day.

For this weekend challenge you'll be building a movie application!  

## Database Setup

1. Create a database named `saga_movies_weekend`
2. Run the queries from `database.sql` on the `saga_movies_weekend` database.
3. You will need to create the junction table between the `movies` and `genres` tables!

## Install Dependencies

1. `npm install`
2. `npm run server`
3. `npm run client`
