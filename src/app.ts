import express from "express";
import bodyParser from "body-parser";
import {UrlShortenerRouter} from './routes/urlshortener';
import {shortUrlRouter} from './routes/shortUrl';

var cors = require("cors");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.set('trust proxy',true); 
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static(__dirname + '/public'));
app.use(UrlShortenerRouter);
app.use(shortUrlRouter);





app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



export { app };