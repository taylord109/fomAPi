import * as expressImport from "express";
import * as bodyParser from "body-parser"
import * as routes from "./routes/routes.js"

let express = expressImport();
this.express.use(this.bodyParser.json);
this.express.use(this.bodyParser.urlencoded({extended: true}));

this.routes(express);

let server = this.express.listen(3000, function(){
    console.log("app running on port.", server.address.port);
});