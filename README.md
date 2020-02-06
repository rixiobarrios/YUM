[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

---
# YUM!

For Homework you will be writing a node application to practice using Express and Mongoose, as well as Mocha/Chai for automated testing. Your task: create an app that tracks and stores Restaurants.

**Due Thursday, 2/13 at 10 am EST**

## Setup

Fork and clone this repo. Build out your file structure following MVC and install all the necessary packages from npm.

## Express

Build out an app using Express with routes that you can view in your browser and forms that manipulate your data with full CRUD. 

Your app should have one resource: Restaurants.

| Name | Type | Description |
| --- | --- | --- |
| name | String | The name of the restaurant |
| owner | String | The name of the owner |
| type | String | The type of food the restaurant serves |
| capacity | Number | The max capacity of the restaurant |

## Bonus 1: Automated tests
Look up how to test a non-JSON webpage endpoint. Add testing to your homework using your research! You could also convert your application to an API and add testing to it that way if you prefer. 

## Bonus 2: Schema Validation

Review the documentation on [Schemas](http://mongoosejs.com/docs/guide.html) and [Validation](http://mongoosejs.com/docs/validation.html) in Mongoose and add to your schema definition. Are there default values you could set in the schema? Are there properties you could validate (make required, set a min or max for, etc)?

## Bonus 3: Subdocuments

In Mongo, you can create nested resources using [Subdocuments](http://mongoosejs.com/docs/subdocs.html). Add a menu property to your Restaurant schema that contains an array of MenuItem documents.
