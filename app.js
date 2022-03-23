const compression = require('compression')
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const fileUpload = require('express-fileupload');
const cors = require('cors')
const express = require('express');
const http = require('http');

const app = express();

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

app.use(compression());

app.use(cors({
    origin: '*'
}));

const port = process.env.PORT || 8080;

app.set('port', port);
app.use(bodyParser.urlencoded({
    extended: true,
    uploadDir: '/tmp/'
}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    createParentPath: true
}));



http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

(function () {
    require("./routes")(app);

})();
