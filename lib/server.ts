import app from './app'
import * as https from 'https';
import * as fs from 'fs';
const PORT = 2100;

const httpsOptions = {
    key: fs.readFileSync('./lib/config/key.pem'),
    cert: fs.readFileSync('./lib/config/cert.pem')
};

https.createServer(httpsOptions, app).listen(PORT, ()=>{
    console.log('Express server listening to port ' + PORT);
})

// app.listen(PORT, () => {
//     console.log('Express server listening on port ' + PORT);
// })