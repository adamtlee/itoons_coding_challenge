# Introduction
This is a coding challenge project using ExpressJS for building a RESTFul backend API.

## Instructions
Build an "iTunes like" web application that allows for the following:

- Browse songs by title, artist, album, year, genre.
- Edit song metadata (at least title, artist, album, year, genre, rating and album artwork).
- Playlists management workflow (create, edit, delete).
- Import/export the song database (you pick the format).

Bonus points:

- Search songs with auto complete (i.e. get a list of songs by an author as you type his/her name).
- Smart playlists.

Things we look for in the code:

- Component based design.
- Testability (no need for 100% test coverage but it should be reasonably easy to build unit and integration tests for it).
Simplicity.
- Nice look and feel (no need to reinvent the wheel here, stock component libraries are ok).

Live Pointer: Coming Soon.
## Requirements
- NodeJS
- Express (v4.16.4)
- babel-cli(v6.26.0)
- babel-preset-es2015(v6.24.1)
- body-parser(v1.18.3)

## Project Setup
1. Clone the repository
```
$ git clone https://github.com/adamtlee/Todo.git
```
2. Navigate to the folder and install necessary packages
```
$ npm install --save
```
3. Use Babel to run the API
```
$  node_modules/.bin/babel-node app.js
```
## Accessing the API via CURL
 ```
curl --request  GET http://localhost:3000/songs
```
