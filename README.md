# Project-Assessment
{
  "name": "devops-node-app",
  "version": "1.0.0",
  "description": "Simple DevOps Node App",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "test": "echo Test Passed"
  },
  "dependencies": {
    "express": "^4.19.2"
  }
}
const express = require('express');

const app = express();

const PORT = 80;

app.get('/', (req, res) => {
    res.send('DevOps Project Running Successfully!');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'UP',
        message: 'Application healthy'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
npm install
FROM node:18


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80 ;

CMD ["npm", "start"]
