# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
   ```html
   {child name} will be making memories with {celebrity name}, a {celebrity
   sport} star, by {child wish}
   ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The click Event is located in module kids.js. I used method(document.addEventListener) that will listen for click event in HTML (the document represents HTML). Using this method I set a variable kidClicked as a target of clickEvent, also I set variable wish to have easy access to wishes from database and made sure to list it as dataset in element <li>in previous function (Kids).Then set if statement to make sure that this would work only if click is pushed on child name, again using dataset. If it is clicked on a child name, for ever child from children array window alert will pop up showing the message:
   > `${kidClicked.innerText} wish is to ${wish}`.
   > Break is needed to stop for of loop. so only one pop up happens per click, otherwise same pop up window would show as many times as # of kids in children array.
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > This function needs to be invoked inside of for of loop because we need to use the return of this function for every kid of kids in <li>text that will appear on the website</li>. We need to find which celebrity is associated with the kid, we also pass the the argument into findCelebrityMatch function every time the loop is running.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > I like to create variable inside clickEvent function for any data I want to be displayed in the window alert, as long as it comes from the same object in the same array.
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > main module provides part of html that is placed into index.html
   1. First part of main.js is all imported functions that will be used to display wanted outcome.
   2. Second variable mainContainer variable is created to be equal to HTML element with id container
   3. Variable applicationHTML is created to be equal to `part of HTML we want to be displayed on the page. ${}is used to invoke functions that will return HTML strings we want displayed in certain articles/sections of HTML.
   4. By mainContainer.innerHTML = applicationHTML we place applicationHTML inside the mainContainer (in document(index.html)):
     <main id="container">
     RIGHT HERE
    </main>
