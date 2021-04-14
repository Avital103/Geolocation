import express from 'express';

let indexRouter = require('./routes');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

const PORT = 8080;

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log('info', `listning on port ${PORT}`);
    });
}

export default app;
