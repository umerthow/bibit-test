
nodeJs Simple API
A simple API by Express and MySQL to access data from 
[OMDb API](http://www.omdbapi.com/) by Ahmad Umar.

## Installation
   $ npm install


## Running dev
1.  Please make sure have set of `.env` configuration in root folder

 ```
 DB_NAME=your_db_name
DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
```

  2.  $ npm run dev
   ```
   [nodemon] 2.0.13
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
running..
   ```

## Running test case
   $ npm run test

```
 Detail movie test case
    ✔ Should return data detail movie (91ms)
    ✔ Should return same Id (68ms)
    ✔ Should return error message `Incorrect IMDb ID.`  (55ms)

  Log - creation
    ✔ Should return success create log

  Search Movie test case
    ✔ Should return data movies (101ms)
    ✔ Should have Title data (99ms)
    ✔ Should return error message `Movie not found!`  (65ms)


  7 passing (488ms)
```

## Directory Structure

- `/src` If you are Express user, this is the directory where you should perform your development.
- `/test` This directory contains the unit test case for module or core function.


## Live API Usage
#### Search Movie
- GET - Search of movie By Movie name  
- url: https://glacial-sierra-70346.herokuapp.com/search?movie_name=Avengers&page=1


#### Detail Movie
- GET - Detail of movie By Movie IMDB Id 
- url: https://glacial-sierra-70346.herokuapp.com/detail/tt0848228
