const http = require('http')

 const {readFileSync} = require('fs');

 const homePage = readFileSync('./navbar/index.html')

 const homeStyles = readFileSync('./navbar/style.css')

 const homeImage = readFileSync('./navbar/mojo1.jpg')

 const homeLogic = readFileSync('./navbar/browser-app.js')

 const server = http.createServer((req,res)=>{

    const url = req.url;
    console.log(url)
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
     res.write(homePage)
     res.end()
    }
    else if(url ==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(`<h1> About Page </h1>`)
        res.end()
    }
    else if(url ==='/style.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if(url ==='/mojo1.jpg'){
        res.writeHead(200,{'content-type':'image/png'})
        res.write(homeImage)
        res.end()
    }
    else if(url ==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write(`<h1> 404 Page Not Found</h1>`)
        res.end()
    } 
 })

 server.listen(5000)