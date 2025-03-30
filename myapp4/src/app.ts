import express from 'express';
import { greet } from './utils';

const app = express();
const port = 3000;

app.get('/', (req, resp) => {
    resp.send("Hello typescript");
});

app.get('/greetings', (req, resp) => {
    const message = greet("World 2")
    resp.send(message)
})

app.listen(port, () =>{
    console.log("Server is up...");
})

