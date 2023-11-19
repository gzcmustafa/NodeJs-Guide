
const http = require("http")

const hostname = '127.0.0.1';

const port = 3000

const fs = require('fs')

const indexPage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')


const server = http.createServer((req,res) => {
    if (req.url === '/'){ //root adresi 
        return res.end(indexPage)
    } else if (req.url === '/about'){
        return res.end(aboutPage)
    } else if ( req.url === '/contact' ) {
        return res.end(contactPage)
    }else {
        res.statusCode = 404
        res.end("sayfa bulunamadı")
    }
})

server.listen(port, hostname, () => {
    console.log(`Server Working... http://${hostname}:${port}/`)
})



