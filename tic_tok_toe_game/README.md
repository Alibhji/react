# Creat a react app without using "create-react-app"

[Source]([README.md](https://medium.com/swlh/react-without-create-react-app-setting-up-a-dev-build-from-scratch-fefd5d9d6baa))
<br>
we need:
- **React** 
  - mkdir bare-bones-react 
  - cd bare-bones-react 
  - npm init
  - npm i react react-dom
  - create index.js inside "src"
    - import React from 'react'
    - import ReactDOM from 'react-dom'
    - import App from './App'
    - ReactDOM.render(<App />,document.getElementById('root'))

- **Bundler** 
  - npm i --save-dev webpack webpack-cli html-webpack-plugin
  - npm i --save-dev html-loader css-loader style-loader
  - npm i --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
  - npm i --save-dev eslint eslint-loader eslint-plugin-react babel-eslint
- **Server**
  - npm i --save-dev webpack-dev-server
  - webpack-dev-server --mode development --open --hot
  - npx webpack-dev-server --mode development --open --hot
- **Tests**

# 'Makefile'
MARKDOWN = pandoc --from gfm --to html --standalone
all: $(patsubst %.md,%.html,$(wildcard *.md)) Makefile

clean:
    rm -f $(patsubst %.md,%.html,$(wildcard *.md))
    rm -f *.bak *~

%.html: %.md
    $(MARKDOWN) $< --output $@