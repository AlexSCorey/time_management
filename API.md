USING the API

Authentication

Authencation is done through HTTP Token Authentican. Each User will be provided a token at registration. Registration route is an unauthenticated route. To access tokens you will need to login or create a user.

USER OPTIONS
To register/create user

POST/users
The request body should be:
{
  'email': 'alex.corey@gmail.com',
  'password': '11111'
}

The response will be:
{
  'id': 1,
  'username': 'alex.corey@gmail.com',
  'token': 'sampleToken'
}

To login:
POST/users
The request body should be:
{
  'email': 'alex.corey@gmail.com',
  'password': '11111'
}

The response will be:
{
  'username': 'alex.corey@gmail.com',
  'token': 'sampleToken'
}

To get all todos
POST/todos

The request body should be:
user_token required

The response will be:
{
  'todo_id':1,
  'todo_duration_amount':40,
  'todo_date': 'MM-DD-YYY'/undefined,
  'todo_start_time':'hh:mm:a',
  'complete': bool,
}

To create a todo
POST/todos

The request body should be:
user_token required
{
  'todo_duration_amount':40
}

optional keys:
{
  'todo_date': 'MM-DD-YYY'/undefined,
  'todo_start_time':'hh:mm:a',
}

The response will be:
{
  'todo_id':1,
  'todo_duration_amount':40,
  'todo_date': 'MM-DD-YYY'/undefined,
  'todo_start_time':'hh:mm:a'/undefined,
  'complete': bool,
}