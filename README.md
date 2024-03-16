## Description

How does this app works? Before you run an application please go to https://www.mongodb.com/ and create free database then create file 
`.env` and add the database like in file `.env.example` or use command `cp .env.example .env` to create new .env file and paste the database link there.

## Installation

```bash
$ npm install
```

or

```bash
$ yarn install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run dev
```

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev
```

## Rest API

```bash
  # api/subscribe
  POST http://localhost:3001/api/subscribe
```
