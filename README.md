# React Redux

![React + Redux](https://miro.medium.com/max/800/1*bs6W6c6yYS36PcD9joLVtw.png)

## What is Redux?

Redux is a predictable state container for JavaScript apps

1. "for JavaScript apps"

    1.1. Redux is not tied to React

    1.2. Can be used with React, Angular, Vue or even vanilla JavaScript
  
    1.3. Redux is a library for JavaScript applications

2. "state container"

    2.1. Redux stores the state of your application

    2.2. Consider a React app - state of a component
  
      ```
      state = {
        isUserLoggedIn: true, 
        username: 'Esaú',
        profileUrl: '',
        onlineUsers: [],
        isModalOpened: false
      }
      ```

    2.3. Redux will store and manage the application state

3. "predictable"

    3.1. Redux is a state container

    3.2. The state of the application can change

    3.3. In Redux, all state transitions are explicit and it is possible to keep track of them

    3.4. The changes to your application's state become predictable

## Why use Redux?

If you wanna manage the state of your application in a predictable way, redux can help you.

## Three Principles

1. "The state of your whole application is stored in an object tree within a single store"

    1.2. Maintain our application state in a single object which would be managed by the Redux store 

2. "The only way to change the state is to emit an action, an object describing what happened"

    2.1. To update the state of our app, you need to let Redux know about that with an action

    2.2. Not allowed to directly update the state object

3. "To specify how the state tree is transformed by actions, you write pure reducers"

    3.1. `const reducer = (previousState, action) => newState`

## How do I start?

1. Fork this project

![Forking the project](https://camo.githubusercontent.com/6f03010c651d060f8b7cfc17da7098c1757c4ead/68747470733a2f2f6669727374636f6e747269627574696f6e732e6769746875622e696f2f6173736574732f526561646d652f666f726b2e706e67)

2. Clone the forked repository

    `git clone https://github.com/user/react-redux` (if you use `git`)

    or 

    `gh repo clone https://github.com/user/react-redux` (if you use `gh` cli)

3. Install the dependencies

    `npm install` (if you use `npm`)

    or

    `yarn` (if you use   `yarn`)

4. Start the project 

    `npm start` (if you `npm`)

    or

    `yarn start` (if you use `yarn`)

-----

[LICENSE](./LICENSE)
