## Simple NestJs App

### Can be started using

```bash
# npm install
$ npm run start
```

Runs on Port 4002 by default

#### GraphQL Playground

http://localhost:4002/graphql

#### Docker

```bash
docker build -t simple-1 .
docker run -p 4002:4002 -d --name simple-1-container simple-1
```
