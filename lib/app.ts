import * as express from "express";
import * as bodyParser from "body-parser"
import { Routes } from "./routes/routes"
import * as mongoose from "mongoose";
import { MongoClient } from 'mongodb'

class App {
    public app: express.Application;
    private routesPrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb+srv://taylor:Lovethyneighbor1@cluster0-enuda.mongodb.net/fomDb?retryWrites=true';

    constructor() {
        this.app = express();
        this.config();
        this.routesPrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        this.app.use
            (bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true }, function (err, db) {
            if (!err) {
                console.log("Successfully connected to " + db.name);
            } else {
                console.error("Failed to connect to mongo db");
            }
        });
    }
}

export default new App().app;