let express = require('express');
let cookieParser = require('cookie-parser');

let indexRouter = require('./routes/index');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

const PORT = 8080;

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log('info', `listning on port ${PORT}`);
    });
}

module.exports = app;
