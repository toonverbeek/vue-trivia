### Introduction

The purpose of this assignment is for the developer to exhibit their familiarity with front-end technologies, programming patterns and to provide a sample of what clean and reusable code means.

You should spend between 4 and 8 hours on this, depending on your familiarity with Vue.

### How to succeed

- Fellow engineers will be reading and reviewing your code - try to imagine how you would want to review someone else's code. What would you like to see?
- Perfect is the enemy of done! We're looking to assess your technical capabilities, not what type of app you would build if you would have unlimited time available. As a business we're always balancing time and quality. When making trade-offs to optimize for time - be explicit!
- Write code in your own way - you should be able to explain your reasoning later on. It's good to look at best practices, but make sure you understand _why_ they're best practices to begin with.

### Technical requirements

The only technical requirement we have is that you use Vue and CSS-Modules.

### Assignment

Your goal is to create an application that uses the [OpenTrivia API](https://opentdb.com/api_config.php). Feel free to configure the parameters however you want.

The app should adhere to the following requirements:

- The app should have at least three views: a starting view, the question view and a summary / high-score view.
- I should be able to select a difficulty when starting a new quiz. The app should have at least three difficulty levels.
- While participating in a quiz, I should be able to see how many questions are left and which question I’m currently answering.
- Every time I start a new quiz, I should get new random questions.
- Questions should be a mix of true/false and multiple choice.
- Ideally, each question in the quiz should have a time-limit, but this is an optional feature. This time limit could be configurable per difficulty level (e.g: on easier levels I get more time per answer). I could be able to see a countdown in the question view.

### Others

- Prioritise quality over quantity.
- Unit testing the application is mandatory, please don't be shy.
- We value good design. Of course we’re looking for a developer and not a designer - but be mindful of what type of UX you're creating.
- Feel free to add your own twist to the game - but make sure that you satisfy the requirements written above!

Feel free to arrange the scaffolding of the application the way you want: the current one is the default template from `vue-cli`
