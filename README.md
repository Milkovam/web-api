##PG6301
##Candidate number = 8006
###Date: 26.04.2021-28.04.2021



##The app runs on localhost:3000
By running npm install & npm start, the project will start both the frontend and backend.
The project contain some of the required functionally including:

#Functional requrements: Messaging system that have been fullfilled:
* The login funcitionality is through Google Authenticator, and once the user is logged in, both first and last name are displayed, 
as well as profile picture and email address. 

* A logged-in user is able to create messages that are sent to one or more users through web-sockets. 

* Users are able to see messages where they are a recipient or sender, unfortunatelly  the project does not have the option to 
display the username on the message system. I have tried with use by hooks, both on the frontend and backend, but everytime, It was displaying  as "undefined".

* Users are able to respond to messages. 

I haven't done refactoring on MessagingSystem, because I was out of the time, and consequenses for that are that I haven't been able to test the code for messaging system. Even though I have tried. 
I have tried to export the "MessagingSystem view as a component, but the intellij didn't allow that, which made testing very difficult in my case. 

*The Application communicates with an Express API with both fetching (GET) and mutating with POST.

I have a bit of CSS, to make the project look more presentable. The layout is very simple, but it works :) 

When it comes to tests I do have one test for Loading view, that covers 100% of the lines, by jest --coverage 

Furthermore, the app uses simply routing that connects one page to another. Project is implementing api/profile and gets active token.
The Authorization URL have been created on Credentials-Google Cloud, and the env text file includes the google_client_id and google_client_secret.
The project handles login callback from authentiaction and redirects the uri, and do fetches the userinfo from login.
Profilepage connects to messagingsystem.
The messagingsystem allows the user to send message through server web socket, and includes state closure in event handler.
The project does have a path to "add user", that allows to add user to the messaging system, 
unnfortunattely I the project do not have the functionality to displayed the "registered" users from the server.

The code is structured through src/client and src/server.


The dependendencies that have been used in these project are parcel, nodemon, concurrently, prettier,node-fetch, react-router & react-router-dom, react and react-dom. As well as express, and a little bit of jest.
If the time have allowed me, I would have written the tests. So, I did prefer to focus on the functionally.




Referances:
FORELESNINGER I PG6301.