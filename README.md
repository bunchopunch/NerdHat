NerdHat
===========

##Overview
Grunt, Backbone, Marionette, Mocha, and Foundation all working together in one scaffold/example application.

## Prerequisites
The build processes in this repository utilize fairly modern front end automation and compiling solutions. If there is a desire to use more than the static files hosted here, the following tools are recommended:

- **[NodeJS](http://nodejs.org/download/):** Dependencies are managed through Node and Bower.
- **[Ruby](https://www.ruby-lang.org/en/installation/):** Foundation 5 is used as a CSS framework. This uses Sass, which primarily comes from a Ruby.
- **[Git](http://git-scm.com/downloads):** You are looking at a git repository. Much recommended. Wow.
- **[LiveReload](http://livereload.com/)**: This is a browser plug-in that will allow pages being rendered by a LiveReload server to update automatically when builds are performed.

##Installation
Open the Myriad directory in a Node JS enabled CLI and run `npm install` and `bower install`

To set up Mocha dependencies, browse to the test directory and run `bower install`.

##Grunt Tasks
The following tasks will be available through Grunt
    - **grunt serve**: Start the application on a live reload server at http://localhost:9000
    - **grunt build**: Compile the application out to the dist directory
    - **grunt test**: Run the tests at http://localhost:9001