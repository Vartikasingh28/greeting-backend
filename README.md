# Greeting Backend

This is the backend service for the Greeting App, built using Node.js and Express. It provides a simple API to return a personalized greeting message.

## Features
- Express.js server
- API endpoint to return a greeting message
- Error handling for missing parameters
- CORS enabled for frontend integration

## Installation & Setup

### Prerequisites
- Node.js installed
- npm installed

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/greeting-backend.git
   ```
2. Navigate into the project directory:
   ```sh
   cd greeting-backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running the Server
To start the server in development mode, run:
```sh
node server.js
```

The server will start on `http://localhost:5000`.

## API Endpoint
### `GET /api/greet?name=YourName`
#### Response:
- Success:
  ```json
  {
    "message": "Hello, YourName! Welcome to Younglabs."
  }
  ```
- Error (if name is missing):
  ```json
  {
    "error": "Name is required."
  }
  ```

## Deployment
### Deploy on Render
1. Push your code to GitHub.
2. Create a new web service on Render.
3. Connect the GitHub repository.
4. Set the `PORT` environment variable to `5000`.
5. Deploy the backend service.
6. link -https://greeting-backend.onrender.com/

