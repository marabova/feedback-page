# Feedback Page App

- author: @marabova;
- title: Feedback Page App
- description: Simple feedback application page with rating form and chart representing the comments done. Once the user submit the comment, all comments are stored in localStorage.

### Prerequisites:

- `node js` >= 8.12

### Commands:

- `npm install` - installing dependencies
- `npm start` - starts dev server on <code>localhost:8080</code> with livereload, sourcemap
- `npm run build:prod` - creates prod files to <code>/dist</code>
- `npm test` - run the tests
- `npm test:coverage` - run the tests with coverage

### Setup

1. git clone https://github.com/marabova/feedback-page.git
2. run <code>npm install</code> in project folder
3. <code>npm run start</code>


## Application structure

    ├── coverage                # Tests coverage 
    ├── node_modules            # Node modules 
    ├── src                     # Source files 
    ├── dist                    # Compiled files 
    ├── webpack  
    ├── .gitignore
    ├── package.json
    ├── package-local.json
    ├── .babelrc
    └── README.md
    
### Technologies used

- ES6, chartJS
- Jest
- Webpack 4 boilerplate
- Styling - Bootsrap with fontawesome
