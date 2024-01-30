const http = require('http');
const userAc = require('./adduser');
const URL = require('url')
const getUser = require('./datasource.json')
const server = http.createServer(function(req,res){
    const data =[
        {username:'Kitti', age:1},
        {username:'Kore', age:4},
        {username:'Kenny', age:4},
    ]

    if(req.url == '/'){
        res.writeHead(200, {'content_Type':'text/html'});
        res.write("Welcome");
        res.end();
    }else if(req.url=='/users'){
        res.writeHead(200, {'content_Type':'application/json'});
            res.write(JSON.stringify(data));
            res.end();
    }
    ///add users
    else if(req.url =='/addUser?username=Kazeem&age=32'){
        newUrl = URL.parse(req.url,true)
        const params = newUrl.query
        let u_name = params.username
        let u_age = params.age;
        userAc(u_name,u_age);
        res.end("record added")
    }
    else if (req.url.startsWith('/addNewUser')){
        res.setHeader('Access-Control-Allow-Origin','*')
        res.writeHead(200, {'content_Type':'application/json'});
        const newUrl = URL.parse(req.url,true)
        const params = newUrl.query
        let u_name = params.username
        let u_age = params.age;
        userAc(u_name,u_age);
            res.end("record added successfully");

        }else if(req.url.startsWith('/getNewuser')){
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.writeHead(200, { 'Content_Type': 'application/json' });
            res.write(JSON.stringify(getUser));
            res.end("User retrieved successfully");
          }
          else if (req.url == '/contact') {
              res.writeHead(200, { 'Content_Type': 'text/html' });
              res.write("contact page");
              res.end();

    }else{
        res.writeHead(404, {'content_Type':'text/html'});
        res.end();
    }
}) 

server.listen(5000, function(){
    console.log("Server running")
});