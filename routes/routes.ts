
   export function start (express)
   {
    express.get("/", function(req, res){
        res.status(200).send("Welcome to our restful API");
    })
};