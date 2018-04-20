# Auxilio

### An On Demand Service Provider
Auxilio is a company that provides on demand services to those who need some form of assistance. Users have to submit a request, or petitio, through this web application to have a service fulfilled.

## Links

### Client URL
[Deployment](https://pedrotavarez.com/auxilio/)

### API URL
[Heroku Deployment](https://auxilio.herokuapp.com/)

[Github Repo](https://github.com/ptavarez16/auxilio-api/)

## Development Process
It's been three months since I first started this journey, and I must say, I have no regrets. The skills I learned here have helped me grow into a full stack web developer.

I followed a pretty good schedule. Staying organzided, I was able to meet MVP in a couple of days. I started off building the API in Rails, then moved on to the client. The API was easy since I was in familiar territory (man I love Rails), but once I started with the client, things got a little tricky.

Ohh Ember... I love and hate you. After smashing into a couple of walls, I was able to successfully build my first application using a front-end framework.

## Wire Frame
[Auxilio Wire Frame](http://res.cloudinary.com/ptavarez/image/upload/v1523635924/auxilio-wireframe.jpg)

## User Stories
Auxilio is a web application that provides on demand services to those who need some form of assistance. This version allows users to submit a request, or an aux*, to the API. Currently they have to determine themselves if the order has been fulfilled or not.

### Authentication
- As a user, I can:
  - Sign up
  - Sign in
### Landing Page
- As a user, I can:
  - Select to sign in or sign up
  - View services provided
### Authenticated
- Once authenticated, as a user I can:
  - Change password
  - Sign out
  - Select a service to and request an Aux (CREATE)
  - Cancel an aux (DELETE)
  - Confirm aux has been completed (UPDATE)
  - View all past auxes (GET)


## Technologies Used
- HTML
  - Hypertext Markup Language is the standard markup language for creating web pages and web applications.
  - Most of what the user see are html elements. Understanding how html works and what I used it for is key.
- Sass
  - Sass is a scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
  - A cousin to CSS, SASS stands for Syntactically Awesome Style Sheets. It's a better way of organizing you code by modularizing it.
- Bootstrap
  - Bootstrap contains HTML nd CSS based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.
  - I used bootstrap for modal templates and styling. Pretty clutch!
- Handlebars
  - Handlebars.js is a popular templating engine that is powerful yet simple to use.
  - With Handlebars, I was able to separate the generation of HTML from the rest of my JavaScript to write cleaner code.
- JavaScript
  - JavaScript is a high-level, interpreted programming language.
  - This is basically what most of my game's logic consisted of. I feel like I got a better understanding of using callbacks, and "this" really saved my butt for a vital function.
- Ember.js
  - Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel (MVVM) pattern. It allows developers to create scalable single-page web applications by incorporating common idioms and best practices into the framework.
- Ajax
  - Ajax is a set of Web development techniques using many Web technologies on the client side to create asynchronous Web applications.
  - This was how I sent data over to my api!
- Stripe
  - Stripe is the "best" software platform for running an internet business.

## Future Iterations
I plan on doing a lot with this app. To get it testing ready, I will need to build three different versions of auxilio: Client version, Auxer version, and Manager version. Although they have different needs, all three versions will work together to provide a unique experience for all three parties.

For this version, some things I would like to add is google maps and twilio. I feel like I will need these technologies to provide a nice user experience.
