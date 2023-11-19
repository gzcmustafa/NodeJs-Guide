//ilk olarak http protokolünü require etmemiz gerekiyor. 
const http = require("http")

//local hostumuzu yazıyoruz. 
const hostname = '127.0.0.1';

//bağlantı noktamızı yazıyoruz.
const port = 3000

// createserver metodu parametre olarak callback fonksiyonu alacak.
const server = http.createServer((req,res) => {
       console.log(req.url)
       res.statusCode = 200
       res.setHeader('Content-Type','text/plain')
       res.end("Hello World")
})

server.listen(port, hostname, () => {
    console.log(`Server Working... http://${hostname}:${port}/`)
})