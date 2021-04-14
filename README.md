# Geolocation

listening on port 8080 and exposing a set of APIs as described below.

## APIs

- GET /distance?source=theSource&destination=theDestination

Get the distance in KM between a source and destination

> Takes the distance from a local DB. If the source and destination combination do not already exist in the DB, or the DB is not accessible, get the info from an external service and store it in the DB (if it’s accessible) before returning the distance to the user
> 
> NOTE: this doesn't check the country and returns the first city it found.

Response:
Response code: 200, Response body: {"distance": numberOfKMs}


- GET /health

> The health API is responsible for determining the status of the connection to the DB

Response:
Response Code: 200 if connection to DB is ok. 500 if connection to DB is not OK
Response Body: empty if connection to DB is ok. Error message if connection to DB is not OK

- GET /popularsearch

> get the most popular search and number of hits for that search
There is no difference between destination and source, as long as it is a matching pair

Response:
Response code: 200
Response body: {"source": "theSource", "destination": "theDestination", "hits": totalNumberOfHits}
Example: {"source": "jerusalem", "destination": "telaviv", "hits": 234}

- POST /distance

> allow ingesting a pair
Body:
Json object holding source, destination and distance
Example: {"source": "jerusalem", "destination": "telaviv", "distance": 100}

Response:
Response code: 201

## Installation

Geolocation requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm start
```

## Docker

Geolocation is very easy to install and deploy in a Docker container.

```sh
$ docker build -t geolocation:0.2 .
```

This will create the Geolocation image and pull in the necessary dependencies.
