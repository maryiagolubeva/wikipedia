# Wikipedia project

## Overview

This project contains a list of automated scenarios that include checks of search area of Wikipedia project (production environment): <https://www.wikipedia.org/>

This project has been developed as an example for my [Medium](https://medium.com/) article for the beginners: [E2E Tests Project Structure Organizing](https://medium.com/jagaad/e2e-tests-project-structure-organizing-c1b688e852a5)

The basics of using TestCafe with JavaScript to write this project are explained here: [The First E2E Test with TestCafe](https://medium.com/jagaad/the-first-e2e-test-with-testcafe-a69116a49e55)

And the ways how to write Selectors are here: [CSS and XPath Selectors for Autotests](https://medium.com/jagaad/css-and-xpath-selectors-for-autotests-75682fff4bb1)

## Programming language and framework

The programming language used here is JavaScript.
The framework is [TestCafe](https://testcafe.io).

## TestCafe setup

All we need is to have Node.js.
In order to start using the TestCafe framework, you need to install it with one console command: npm install -g testcafe

## How to run tests

To run these tests on the Chrome browser use the command: testcafe chrome src/fixtures/search.js