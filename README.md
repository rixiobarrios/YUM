[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

---
# YUM!

For Homework you will be writing a node application to practice using Express, Mocha, Chai, and Supertest for automated testing. Your task: create an app that tracks and stores Restaurants.

**Due Thursday, 2/13 at 10 am EST**

## Setup

Fork and clone this repo. Build out your file structure following MVC and install all the necessary packages from npm.

## Express API

Build out an Express API that returns JSON data, with routes that allow you to manipulate your data with full CRUD (i.e., GET, POST, PUT, DELETE). ***You must add automated tests for your API endpoints using Mocha/Chai***.

***You don't need to create a Mongo database for this exercise - just hardcode the data like we did with [the candies demo today](https://git.generalassemb.ly/seir-129/express-tdd-exercise/blob/master/controllers/candies.js#L5-L10)***

Your app should have one resource: Restaurants.

| Name | Type | Description |
| --- | --- | --- |
| name | String | The name of the restaurant |
| owner | String | The name of the owner |
| type | String | The type of food the restaurant serves |
| capacity | Number | The max capacity of the restaurant |
