import express, { Express } from 'express'

const app: Express = express();

app.get('/', (req, res) => {
    res.send('Hola');
});

app.listen(3000, () => console.log('Server on port 3000'))