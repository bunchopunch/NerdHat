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
###Client
Browse to the client directory. Run both `npm install` and `bower install`.
###Testing
Browse to the test directory and run `bower install`.
###API
Browse to the api directory and run `npm install`.

##Grunt Tasks
The following tasks will be available through Grunt
    - **grunt serve**: Start the application on a live reload server at http://localhost:9000
    - **grunt build**: Compile the application out to the dist directory
    - **grunt test**: Run the tests at http://localhost:9001

##Example API calls
At this point, the API app is sloppy and simple. But, it should still work. Please note that when pointing cURL at localhost, it may be prone to run slowly.

- http://localhost:9090/api/hats
- http://localhost:9090/api/hats/1
- `curl -X POST -i -H "Content-Type: application/json" -d '{"name":"Mountain Man"}' http://localhost:9090/api/hats`
- `curl -X POST -i -H "Content-Type: application/json" -d '{"name":"Mountain Man","description":"So burly","features": ["Nope."],"price":"68.56","image":"unknown.jpg"}' http://localhost:9090/api/hats`
- `curl -X DELETE -i -H "Content-Type: application/json" http://localhost:9090/api/hats/1`
- `curl -X PUT -i -H "Content-Type: application/json" -d '{"name":"Mountain Man","description":"So burly","features": ["Nope."],"price":"68.56","image":"unknown.jpg"}' http://localhost:9090/api/hats/1`