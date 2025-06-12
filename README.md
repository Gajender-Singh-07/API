# API

This repository contains two basic Express.js applications to handle player data. One interacts with MongoDB to perform CRUD operations (`index.js`), while the other serves static cricket player data (`server.js`).

## Features

### 1. `index.js` - MongoDB CRUD API
- Connects to MongoDB at `mongodb://localhost:27017/api`
- Defines a `user` schema with fields: `name`, `team`, `role`, and `password`
- Provides the following endpoints:
  - `GET /` — Basic hello world endpoint
  - `POST /register` — Registers a new player/user in MongoDB
  - `GET /show` — Fetches all users from the database
  - `POST /delete` — Deletes a user based on the `name` field
  - `POST /update/:val` — Updates a user’s information where `name = :val`

### 2. `server.js` - Static Data Server
- Serves static hardcoded cricket player data
- Provides endpoints:
  - `GET /` — Sends a list of predefined cricket players
  - `POST /register` — Echoes back the posted form data

## Prerequisites

- Node.js
- MongoDB (for `index.js`)
- npm

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. Install Dependecies
   npm install express mongoose

3. Start MongoDB Server :
   mongod

4. Run the Servers :
   node index.js
   node server.js 
