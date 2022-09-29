# Hello!

This react application allows for searching for steam game stats utilizing the steam API.

### Technologies/Resources Used:

Unsplashed API is used for the randomly generated backgrounds (all gaming related, of course).
React framework

## Purpose of Project

The overall goal is to allow users to easily access interesting data about their favorite games.

## Type of Data that can be Accessed

### Possible inclusions

Display the total number of achievements a searched game has.
Change Achievement Names to splice out all underscores to improve readability.

### Bugs and Errors

1. SearchIcon not displaying - could be a corrupted file.
2. When searching for a game, receiving CORS Missing Allow Origin error. - UPDATE - the CORS is a permissions error on steam's side. A work around is to use a web server instead.
3. node.js cannot find module 'request' - UPDATE - Solution, the folder containing the directory needs to run: npm install request
   (https://stackoverflow.com/questions/16482600/node-js-cannot-find-module-request)
4. Encountering a "Cannot set headers after they are sent to the client" error from the express server.
   This stackoverflow may have a solution:
   (https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client)

### Current Work

09/21/22 - Created a working search bar for the achievements data. Needed to use ref to store and access the search's text input to a DOM node.
(https://reactjs.org/docs/refs-and-the-dom.html)

Organized code into React components.

09/22/22 - Created serverTest folder containing hello.js and helloExpress to create node and express practice servers respectively.
(https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

09/26/22 - Found a page explaining how to overcome the CORS issue with the steam api.
https://danbeyer.github.io/steamapi/page2.html

09/28/22 - Temporarily commented out most of the code in app.js to test the client to server functionality. The bindGetNewsButtons will be removed/reworked once testing is completed.

Encountered "Cannot set headers after they are sent to the client" server error.
Goal is to receive JSON data from steam.
