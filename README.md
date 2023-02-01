# Github Repository Search 
The service is able to provide: 
* A list of the most popular repositories, sorted by number of stars. 
* An option to be able to view the top 10, 50, 100 repositories should be available. 
* Given a date, the most popular repositories created from this date onwards should be returned. 
* A ﬁlter for the programming language would be a great addition to have.


## Getting started

### Installation
To install the dependencies, move to the project root directory then run
``` 
yarn
```
 
### Start
To start the server, run
```
yarn start
```

## API 
In this we're exposing a single POST endpoint which receives data as a request body and return desired repositories as per need.

### Endpoint - /api/repository
#### Request Body
```
{
    "sort": "stars",
    "perPage": 1,
    "language": "PHP",
    "created": "2019-01-10"
}
```

#### Sort
We can sort on the basis of 
* forks
* stars
* help-wanted-issues
* updated
