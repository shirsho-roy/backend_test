Backend Test
Basic REST api call tests

﻿

POST
127.0.0.1:3000/data
127.0.0.1:3000/data
This endpoint allows you to send data via an HTTP POST request to the specified URL. The request should include a payload with a name and price. Upon successful execution, the server will respond with a status code of 201 and a JSON array containing an object with an id, name, and price.

Tests
Status Code Test: Ensure that the response status code is 201.
Response Time Test: Verify the response time meets the expected performance criteria.
Content Type Test: Validate that the response content type is set to "application/json".
Object Schema Test: Check that the structure of the returned object matches the expected schema.
﻿

Body
raw (json)
json
{
    "name":"com6",
    "price": "$1300"
}
GET
127.0.0.1:3000/data
127.0.0.1:3000/data
The endpoint 127.0.0.1:3000/data is an HTTP GET request that retrieves data. The response returned is a JSON array with objects containing the keys "id", "name", and "price". Below is the JSON schema for the response:

JSON
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "number"
      },
      "name": {
        "type": "string"
      },
      "price": {
        "type": "string"
      }
    }
  }
}
﻿

DELETE
127.0.0.1:3000/data/3
127.0.0.1:3000/data/3
The API endpoint sends an HTTP DELETE request to 127.0.0.1:3000/data/3 to delete a specific resource. The response returned a status code of 204 with a Content-Type of text/xml. As per the user's request, the response can be documented as a JSON schema.

﻿

PUT
127.0.0.1:3000/data/5
127.0.0.1:3000/data/5
Update Data
This endpoint is used to update a specific data entry.

Request
Method: PUT
URL: 127.0.0.1:3000/data/5
Body (raw, JSON):

JSON
{
  "name": "",
  "price": ""
}
Response
The response is in JSON format with the following schema:

JSON
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "price": {
      "type": "string"
    }
  }
}
﻿

Body
raw (json)
json
{
    "name":"com5",
    "price":"$5400"
}
